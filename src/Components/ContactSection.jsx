import React, { useState } from 'react';
import '../Style.css';

const ContactSection = () => {
  const [budget, setBudget] = useState(60000);
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

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, budget }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
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
      } else {
        alert('Failed to send the message. Please try again later.');
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
            <p><img src="/Images/icn1.png" alt="img" />&nbsp; +91-7973699595</p>
          </a>
          <a className="contx" href="mailto:hello@hatchcoders.com">
            <p><img src="/Images/icn3.png" alt="img" />&nbsp; hello@hatchcoders.com</p>
          </a>
          {/* <a className="contx" href="#">
            <p><img src="icn2.png" alt="img" />&nbsp; E -45 phase 8, Mohali, Punjab (India)</p>
          </a> */}
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <h2>Let's Get to Know You</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group flx-frm">
              <input type="text" name="fullName" placeholder="Full Name" className="form-input" onChange={handleChange} value={formData.fullName} />
              <input type="email" name="email" placeholder="Business Email" className="form-input" onChange={handleChange} value={formData.email} />
            </div>

            <div className="form-group flx-frm">
              <input type="number" name="phoneNumber" placeholder="Phone Number" className="form-input" onChange={handleChange} value={formData.phoneNumber} />
              <input type="text" name="companyName" placeholder="Company (or Project) Name" className="form-input" onChange={handleChange} value={formData.companyName} />
            </div>

            <div className="form-group">
              <select name="jobTitle" className="form-input drop" onChange={handleChange} value={formData.jobTitle}>
                <option value="" disabled>Job Title</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <select name="launchTimeline" className="form-input drop" onChange={handleChange} value={formData.launchTimeline}>
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
