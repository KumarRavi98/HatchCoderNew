import React, { useEffect, useRef } from 'react';

const VideoTestimonials = () => {
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
    <div className="video-testimonials">
      <div className="container">
        <div className="tut">
          <h1 className="slide-up h1-active" ref={h1Ref}>What Our Customers Say</h1>
          <p className="slide-up p-active" ref={pRef}>Check out these video testimonials from our satisfied clients.</p>
        </div>
        <div className="video-container">
          {/* Video 1 */}
          <div className="video-item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MyGHbS5j96Q"
            title="Video Testimonial 1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          </div>

          {/* Video 2 */}
          {/* <div className="video-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="Video Testimonial 2"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}

          {/* Add more video items as needed */}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
