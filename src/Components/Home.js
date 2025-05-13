import React, { useEffect, useRef } from 'react';
import '../Style.css';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Banner from './Banner';
import ContactSection from './ContactSection';
import OurTech from './OurTech';
import VideoTestimonials from './VideoTestimonials';

const Home = () => {
  // Refs for each h1 and p element to avoid conflicts
  const h1Ref1 = useRef(null);
  const pRef1 = useRef(null);
  const h1Ref2 = useRef(null);
  const pRef2 = useRef(null);

  useEffect(() => {
    // IntersectionObserver for handling animation on scroll
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          // Add 'active' class when element comes into view
          entry.target.classList.add('active');
          // Stop observing after the first trigger
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    // Observe all elements with refs
    if (h1Ref1.current) observer.observe(h1Ref1.current);
    if (pRef1.current) observer.observe(pRef1.current);
    if (h1Ref2.current) observer.observe(h1Ref2.current);
    if (pRef2.current) observer.observe(pRef2.current);

    return () => observer.disconnect(); // Clean up the observer
  }, []);

  return (
    <>
      <Banner />
      <div className="back">
        <div className="container1"></div>
      </div>

      {/* WhatsApp Sticky Icon */}
      <a
        href="https://wa.me/917973699595"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Images/whats2.gif" alt="WhatsApp Icon" />
      </a>

      {/* Comprehensive Digital Solutions Section */}
      <div className="container11">
        <div className="tut">
          <h1 className="slide-up h1-active" ref={h1Ref1}>Comprehensive Digital Solutions</h1>
          <p className="slide-up p-active" ref={pRef1}>The wise man therefore always holds in these matters to this principle of selection.</p>
        </div>

        {/* Your UI icon blocks */}
        <div className="com">
          <div className="ui">
            <img className="shad1" src={process.env.PUBLIC_URL + "/Images/icon1.png"} alt="UI/UX" />
            <div className="txt-lt">
              <h2>UI/UX Design</h2>
              <p>Members, Friends Connection (like followers), Private Message</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad2" src={process.env.PUBLIC_URL + "/Images/icon2.png"} alt="Web Dev" />
            <div className="txt-lt">
              <h2>Web Development</h2>
              <p>Your users can create groups to let other users join and talk</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad3" src={process.env.PUBLIC_URL + "/Images/icon3.png"} alt="Mobile App" />
            <div className="txt-lt">
              <h2>Mobile Apps Development</h2>
              <p>Forum is ready by BBPress. Your users can make topics and talk.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad1" src={process.env.PUBLIC_URL + "/Images/icon4.png"} alt="Game Dev" />
            <div className="txt-lt">
              <h2>Game Development</h2>
              <p>You can create Members, Groups It's by drag & drop live builder.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad2" src={process.env.PUBLIC_URL + "/Images/icon5.png"} alt="Digital Marketing" />
            <div className="txt-lt">
              <h2>Digital Marketing</h2>
              <p>Members, Groups list can be modified by drag & drop live builder.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad3" src={process.env.PUBLIC_URL + "/Images/icon6.png"} alt="AR/VR" />
            <div className="txt-lt">
              <h2>AR/VR Development</h2>
              <p>8 different scroll effects are ready. You can always change by your tastes.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad1" src={process.env.PUBLIC_URL + "/Images/icon7.png"} alt="Testing" />
            <div className="txt-lt">
              <h2>Testing</h2>
              <p>We ensure bug-free, high-performance apps through expert testing.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad3" src={process.env.PUBLIC_URL + "/Images/icon8.png"} alt="DevOps" />
            <div className="txt-lt">
              <h2>DevOps</h2>
              <p>We streamline deployment and scaling with efficient, automated DevOps solutions.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad2" src={process.env.PUBLIC_URL + "/Images/icon9.png"} alt="App Maintenance" />
            <div className="txt-lt">
              <h2>Application Maintenance</h2>
              <p>Reliable application maintenance for performance, security, and updates.</p>
            </div>
          </div>

          <div className="ui">
            <img className="shad3" src={process.env.PUBLIC_URL + "/Images/icon10.png"} alt="Support" />
            <div className="txt-lt">
              <h2>Support 24/7</h2>
              <p>24/7 support ensuring continuous uptime, stability, and assistance.</p>
            </div>
          </div>
        </div>
      </div>

      <OurTech />
      <Portfolio id="portfolio" />

      {/* Testimonials Section */}
      <div id="testimo" className="test2">
        <div className="container">
          <div className="tut tut2">
            <h1 className="slide-up h1-active" ref={h1Ref2}>Why customers love working with us</h1>
            <p className="slide-up p-active" ref={pRef2}>The wise man therefore always holds in these matters to this principle of selection.</p>
          </div>
          <div className="herosection">
            <Testimonials />
          </div>
        </div>
      </div>

      <VideoTestimonials />
      <ContactSection />

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
