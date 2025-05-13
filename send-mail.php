<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer classes
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';

// Dynamic CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
    'https://www.hatchcoders.com',
    'https://hatchcoders.com'
];

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid or missing JSON data']);
    exit();
}

// Extract data
$fullName = $data['fullName'] ?? '';
$email = $data['email'] ?? '';
$phoneNumber = $data['phoneNumber'] ?? '';
$companyName = $data['companyName'] ?? '';
$jobTitle = $data['jobTitle'] ?? '';
$launchTimeline = $data['launchTimeline'] ?? '';
$budget = $data['budget'] ?? '';
$projectDescription = $data['projectDescription'] ?? '';
$recaptchaToken = $data['recaptchaToken'] ?? '';

// 🔐 reCAPTCHA Secret Key
$recaptchaSecret = '6LfPqDYrAAAAACaLuJvCa9qwDE540jV1d8PBHad3';

// Verify reCAPTCHA
$verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaToken}");
$responseData = json_decode($verifyResponse);

if (!$responseData->success) {
    http_response_code(403);
    echo json_encode(['message' => 'reCAPTCHA verification failed.']);
    exit();
}

// Send Email
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hatchcoders@hatchcoders.com';
    $mail->Password   = 'Hatchcoders@123456'; // Use environment variable in production
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('hatchcoders@hatchcoders.com', 'Website Contact');
    $mail->addAddress('hatchcoders@gmail.com');
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "
        <h2>Contact Form Submission</h2>
        <p><strong>Full Name:</strong> {$fullName}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone Number:</strong> {$phoneNumber}</p>
        <p><strong>Company Name:</strong> {$companyName}</p>
        <p><strong>Job Title:</strong> {$jobTitle}</p>
        <p><strong>Launch Timeline:</strong> {$launchTimeline}</p>
        <p><strong>Budget:</strong> \${$budget}</p>
        <p><strong>Project Description:</strong> {$projectDescription}</p>
    ";

    $mail->send();
    echo json_encode(['message' => 'Email sent successfully']);
} catch (Exception $e) {
    file_put_contents('error_log.txt', date('Y-m-d H:i:s') . ' - ' . $mail->ErrorInfo . PHP_EOL, FILE_APPEND);
    http_response_code(500);
    echo json_encode(['message' => "Email failed: {$mail->ErrorInfo}"]);
}
