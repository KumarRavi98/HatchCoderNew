import React, { useState } from 'react';
import '../Style.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactSection = () => {
  const [budget, setBudget] = useState(60000);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    launchTimeline: '',
    projectDescription: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      alert('Please enter a valid 10-digit mobile number starting with 6-9.');
      return;
    }

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    try {
      const response = await fetch('https://www.hatchcoders.com/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, budget, recaptchaToken }),
      });

      const contentType = response.headers.get('Content-Type');

      if (response.ok) {
        const result = contentType && contentType.includes('application/json')
          ? await response.json()
          : { message: 'Message sent successfully!' };

        alert(result.message);

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          jobTitle: '',
          launchTimeline: '',
          projectDescription: '',
        });
        setBudget(60000);
        setRecaptchaToken('');
      } else {
        const result = contentType && contentType.includes('application/json')
          ? await response.json()
          : { message: 'Something went wrong.' };

        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="container">
      <div className="contact-section">
        {/* Left Column */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <h1>Our expert</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <h3>Integrate Toward Innovation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <h3>Contact Info:</h3>
          <a className="contx" href="tel:7973699595">
            <p><img src="/Images/icn1.png" alt="phone" />&nbsp; +91-7973699595</p>
          </a>
          <a className="contx" href="mailto:hello@hatchcoders.com">
            <p><img src="/Images/icn3.png" alt="email" />&nbsp; hello@hatchcoders.com</p>
          </a>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <h2>Let's Get to Know You</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group flx-frm">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-input"
                onChange={handleChange}
                value={formData.fullName}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                className="form-input"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="form-group flx-frm">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                onChange={handleChange}
                value={formData.phoneNumber}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company (or Project) Name"
                className="form-input"
                onChange={handleChange}
                value={formData.companyName}
              />
            </div>

            <div className="form-group">
              <select
                name="jobTitle"
                className="form-input drop"
                onChange={handleChange}
                value={formData.jobTitle}
                required
              >
                <option value="" disabled>Job Title</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="launchTimeline"
                className="form-input drop"
                onChange={handleChange}
                value={formData.launchTimeline}
                required
              >
                <option value="" disabled>When do you want to launch a solution?</option>
                <option value="Immediately">Immediately</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="3-6 Months">3-6 Months</option>
                <option value="6+ Months">6+ Months</option>
              </select>
            </div>

            <div className="form-group">
              <label className="budget-label">
                Budget: ${Number(budget).toLocaleString()}
                <input
                  type="range"
                  min="300"
                  max="100000"
                  step="200"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="budget-range"
                />
              </label>
            </div>

            <div className="form-group">
              <textarea
                name="projectDescription"
                placeholder="About Project"
                className="form-textarea"
                onChange={handleChange}
                value={formData.projectDescription}
              ></textarea>
            </div>

            <div className="form-group">
              <ReCAPTCHA
                sitekey="6LfPqDYrAAAAAFsFuht1PuUSpDrdddl4EW3VvhtD"
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
