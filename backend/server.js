const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const {
    fullName,
    email,
    phoneNumber,
    companyName,
    jobTitle,
    launchTimeline,
    budget,
    projectDescription,
  } = req.body;

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hatchcoders@gmail.com',       // ⬅️ Your Gmail
      pass: 'izwcghkalkqknsnn',    // ⬅️ Gmail App Password
    },
  });

  const mailOptions = {
    from: 'hatchcoders@gmail.com',
    to: ['hatchcoders@gmail.com', email],
    subject: 'New Contact Form Submission',
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Launch Timeline:</strong> ${launchTimeline}</p>
      <p><strong>Budget:</strong> $${budget}</p>
      <p><strong>Project Description:</strong> ${projectDescription}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Email failed to send' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
