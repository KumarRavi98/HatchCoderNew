import React, { useEffect, useRef } from 'react';
import StatsCounter from './StatsCounter';
import Testimonials from './Testimonials';
import Footer from './Footer';

const AboutUs = () => {

 // Refs for h1 and p elements
   const h1Ref = useRef(null);
   const pRef = useRef(null);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry], observerInstance) => {
         if (entry.isIntersecting) {
           // Add 'active' class when element comes into view
           entry.target.classList.add('active');
 
           // Stop observing after first trigger
           observerInstance.unobserve(entry.target);
         }
       },
       { threshold: 0.1 } // trigger when 10% visible
     );
 
     if (h1Ref.current) {
       observer.observe(h1Ref.current);
     }
     if (pRef.current) {
       observer.observe(pRef.current);
     }
 
     return () => observer.disconnect(); // clean up
   }, []);

  return (
    <>
      <div className="above-sp-about"></div>
      <div className="container-about">
        <div className='about-banner'>
          <div className='content-div'>
            <h1>About Us</h1>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className='who-we-are-sec'>
          <div className='img-div'>
            <img className='about-img' src={process.env.PUBLIC_URL + "/Images/who-we-are.png"} alt='img' />
          </div>
          <div className='text-div'>
            <h4>Who We Are</h4>
            <h1>Innovative IT Solutions Crafted to Your Needs</h1>
            <p>
              At Hatchcoders IT Company, we specialize in delivering cutting-edge technology solutions
              tailored to your unique business needs. From Web Design and Development to Graphic Design,
              Mobile App Development, and UI/UX Design, we empower businesses to thrive in the digital world.
            </p>

            <hr />

            <div className='small-divs'>
              <div className='mission-div'>
                <h3>Our Mission</h3>
                <p>
                  Our mission at Hatchcoders is to drive digital transformation by providing innovative,
                  scalable, and user-centric technology services. We help businesses enhance their online presence,
                  streamline operations, and maximize their potential.
                </p>
              </div>
              <div className='we-do-div'>
                <h3>What We Do Best</h3>
                <ul>
                  <li><b>Web Design & Development</b> – Crafting responsive, high-performance websites.</li>
                  <li><b>Graphic Design</b> – Delivering visually stunning designs that speak your brand’s language.</li>
                  <li><b>App Development</b> – Building robust, feature-rich mobile applications.</li>
                  <li><b>UI/UX Design</b> – Creating intuitive and engaging digital experiences.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------- Counter Section -------------------*/}
        <div className='counter-sec'>
          <div className='count-container'>
            <StatsCounter />
          </div>
        </div>

        {/* Static Cards Section */}
        <div className='cards-sec'>
          <div className='cards-header'>
            <h4 className="slide-up h1-active" ref={h1Ref}>Reason to choose us</h4>
            <h2 className="slide-up p-active" ref={pRef}>We provide truly prominent IT solutions.</h2>
          </div>

          <div className='cards-container'>
            <div className='card'>
              <div className='card-icon'>
                <img src={process.env.PUBLIC_URL + "/Images/infrastructure.png"} alt="Infrastructure" />
              </div>
              <h3>Infrastructure Technology</h3>
              <p>Accelerate innovation with world-class tech teams. We’ll match you to an entire.</p>
            </div>

            <div className='card'>
              <div className='card-icon'>
                <img src={process.env.PUBLIC_URL + "/Images/team.png"} alt="Team" />
              </div>
              <h3>Highly professional team members</h3>
              <p>Accelerate innovation with world-class tech teams. We’ll match you to an entire.</p>
            </div>

            <div className='card'>
              <div className='card-icon'>
                <img src={process.env.PUBLIC_URL + "/Images/security.png"} alt="Security" />
              </div>
              <h3>Security Management</h3>
              <p>Accelerate innovation with world-class tech teams. We’ll match you to an entire.</p>
            </div>

            <div className='card'>
              <div className='card-icon'>
                <img src={process.env.PUBLIC_URL + "/Images/desktop.png"} alt="Desktop" />
              </div>
              <h3>Desktop Computing</h3>
              <p>Accelerate innovation with world-class tech teams. We’ll match you to an entire.</p>
            </div>
          </div>
        </div>
{/*-------------------- Testimonial Section -------------------*/}
      <div className="test2">
        <div className="container ">
          <div className="tut tut2">
            <h1 className="slide-up h1-active" ref={h1Ref}>Why customers love working with us</h1>
            <p className="slide-up p-active" ref={pRef}>The wise man therefore always holds in these matters to this principle of selection.</p>
          </div>
          <div className="herosection">
            <Testimonials />
          </div>
        </div>
      </div>

      </div>

      <Footer />
    </>


  );
};

export default AboutUs;
