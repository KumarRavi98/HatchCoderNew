import React, { useEffect, useRef } from 'react';
import '../Style.css';
import ImageSlider from './ImageSlider';
import { ReactTyped } from 'react-typed';

const Banner = () => {
  // Refs for h1 and p elements
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // Immediately apply the "active" class on load to trigger animations
    if (h1Ref.current) {
      h1Ref.current.classList.add('active');
    }
    if (pRef.current) {
      pRef.current.classList.add('active');
    }
  }, []); // Empty dependency array to ensure this runs once after component mounts

  return (
    <>
      <header className="main-banner">
        <div className="banner-txt">
          {/* Primary heading with targeted keywords */}
          <h1 className="slide-up h1-active" ref={h1Ref}>
            We Design <span style={{ color: "red" }}>Strong Visual</span> and{' '}
            <ReactTyped
              strings={[
                'Digital Products',
                'Web Designing',
                'Web Development',
                'UI/UX Designing',
                'App Development',
                'Game Development',
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
            />
          </h1>

          {/* Supporting text with relevant keywords */}
          <p className="slide-up p-active" ref={pRef}>
            Crafting innovative ideas to bring a smile to your users worldwide through exceptional design and functionality.
          </p>
        </div>

        {/* ImageSlider for showcasing visual content */}
        <ImageSlider />
      </header>
    </>
  );
};

export default Banner;
