import React from 'react';
import '../Style.css';

const PricingPlan = () => {
  return (
    <div className="pricing-container">
       <div className='pricing-head'>
       <h1 className="pricing-title">Budget-friendly pricing alternatives</h1>
      <p className="pricing-subtitle">
        Get started free or upgrade to share your impact for all completed tasks with multiple people
      </p>
       </div>

       <div className='all-cards'>

      <div className='pricing-cards'>
          {/* Starter Plan */}
          <div className="pricing-card">
            <div className='two-pricing-div'>
          <div>
            <span className="plan-label">Starter</span>
            <h2 className="plan-price">$0 <span>/Month</span></h2>
            <button className="plan-button">Get Started Now</button>
          </div>
          <ul className="plan-features">
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Unlimited focused sessions</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Share my impact (Completed high priority tasks only)</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Share my impact with my manager (1 email address)</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Dedicated work workspace</li>
          </ul>
          </div>
        </div>

        {/* Achiever Plan */}
        <div className="pricing-card popular">
        <div className='two-pricing-div'>
          {/* <div className="popular-badge">Most Popular</div> */}
          <div>
            <span className="plan-label">Achiever</span>
            <h2 className="plan-price">$20 <span>/Month</span></h2>
            <button className="plan-button">Buy Now</button>
          </div>
          <ul className="plan-features2">
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Everything in starter</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Share my impact (Any completed task)</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Share my impact with my team (Multiple email addresses)</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              Work + Personal workspace</li>
            <li>
            <img className='points' src={process.env.PUBLIC_URL+"/Images/circle-check.svg"} alt='check' />
              AI Assist</li>
          </ul>
          </div>

        </div>
      </div>

{/* Contact Us */}
<div className="pricing-card contact">
          <div className="contact-icon">
          <img className='contact-price-icon' src={process.env.PUBLIC_URL+"/Images/mage_phone-call.svg"} alt='phone' />
          </div>
          <h3>Contact Us</h3>
          <p>Help your team and organization plan better tasks and focus on what moves the needle.</p>
          <button className="contact-button">Contact Us</button>
          <p className="note">* For enterprise-level purchases</p>
        </div>

        </div>
        
    </div>
  );
};

export default PricingPlan;
