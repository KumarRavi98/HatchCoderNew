import React from "react";
import "../Style.css";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

const Footer = () => {

  const isTestimonialActive = window.location.hash === '#testimo';
  const isPortfolioActive = window.location.hash === '#portfolio';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="foot-left2">
          <h2>Have a project idea! Let’s work together.</h2>
          <p>
            Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo. Maecenas
            tincidunt imperdiet magna, et porta libero eleifend vel.
          </p>
          <Link to="/Hire"><button className="footer-button">Get A Quote</button></Link>

          </div>
        </div>
        <div className="footer-right">
 
        <div className="social1">
        <Link to="https://www.facebook.com/hatchcoders">  <img src="/Images/foot1.svg" alt="facebook"></img></Link>
        <Link to="https://www.linkedin.com/company/hatchcoders/">  <img src="/Images/foot3.svg" alt="Linkedin"></img></Link>
        <Link to="https://www.instagram.com/hatch_coders/">   <img src="/Images/foot4.svg" alt="Instagram"></img></Link>
        <Link to="https://www.youtube.com/@HatchCoders">   <img src="/Images/foot5.svg" alt="Youtube"></img></Link>
        </div>
        <hr></hr>

       <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                <HashLink
                      smooth
                      className={`footer-link ${isPortfolioActive ? 'active' : ''}`}
                      to="/#portfolio"
                    >
                      Portfolio
                    </HashLink>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/Service">Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <HashLink
                      smooth
                      className={`footer-link ${isTestimonialActive ? 'active' : ''}`}
                      to="/#testimo"
                    >
                      Testimonial
                    </HashLink>
                </li>
                {/* <li>
                  <Link to="#pricing-plans">Pricing Plans</Link>
                </li> */}
                <li>
                  <Link to="/Hire">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="#ui-ux-design">UI/UX Design</Link>
                </li>
                <li>
                  <Link to="#mobile-app-development">Mobile App Development</Link>
                </li>
                <li>
                  <Link to="#web-app-development">Web App Development</Link>
                </li>
                <li>
                  <Link to="#game-design">Game Design 2D/3D</Link>
                </li>
                <li>
                  <Link to="#game-development">Game Development</Link>
                </li>
                <li>
                  <Link to="#web-game-development">Web Game Development</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Expertise</h4>
              <ul>
                <li>
                  <Link to="#ecommerce-development">E-commerce App Development</Link>
                </li>
                <li>
                  <Link to="#blockchain-development">Blockchain App Development</Link>
                </li>
                <li>
                  <Link to="#fintech-development">Fintech App Development</Link>
                </li>
                <li>
                  <Link to="#ar-vr-development">AR/VR App Development</Link>
                </li>
                <li>
                  <Link to="#grocery-app-development">Grocery Delivery App Development</Link>
                </li>
                <li>
                  <Link to="#fitness-app-development">Fitness Delivery App Development</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      
        <p>Copyright © 2025 hatchcoders — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
