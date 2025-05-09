import React, { useEffect, useRef } from 'react';
import Footer from './Footer';
// import ImageSlider from './ImageSlider'
// import Services from './Services'

function Service() {

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
<div className="above-sp">
{/* <ImageSlider /> */}
</div>
<div className="container11">

<div className="tut">

  <h1 className="slide-up h1-active" ref={h1Ref}>Comprehensive Digital Solutions</h1>
  <p className="slide-up p-active" ref={pRef}>The wise man therefore always holds in these matters to this principle of selection.</p>
  

</div>

<div className="com">

  <div className="ui">
  <img className='shad1' src={process.env.PUBLIC_URL+"/Images/icon1.png"} alt='img' />
                <div className="txt-lt">
      <h2>UI/UX Design</h2>
      <p>Members, Friends Connection ( like followers ), Private Message</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad2'  src={process.env.PUBLIC_URL+"/Images/icon2.png"} alt='img' />
                <div className="txt-lt">
      <h2>Web Development</h2>
      <p>Your users can create groups to let other users to join and talk</p>
    </div>
  </div>





{/* ////// */}


  <div className="ui">
  <img className='shad3'  src={process.env.PUBLIC_URL+"/Images/icon3.png"} alt='img' />
                <div className="txt-lt">
      <h2>Mobile Apps Development</h2>
      <p>Forum is ready by BBPress. Your users can make topics and talk.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad1' src={process.env.PUBLIC_URL+"/Images/icon4.png"} alt='img' />
                <div className="txt-lt">
      <h2>Game Development</h2>
      <p>You can create Members, Groups It's by drag & drop live builder.</p>
    </div>
  </div>



{/* ////// */}


<div className="ui">
  <img className='shad2' src={process.env.PUBLIC_URL+"/Images/icon5.png"} alt='img' />
                <div className="txt-lt">
      <h2>Digital Marketing</h2>
      <p>Members, Groups list can be modified by drag & drop live builder.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad3' src={process.env.PUBLIC_URL+"/Images/icon6.png"} alt='img' />
                <div className="txt-lt">
      <h2>AR/VR Development</h2>
      <p>8 different scroll effects are ready. You can always change by your tastes.</p>
    </div>
  </div>

{/* ////// */}


  <div className="ui">
  <img className='shad1' src={process.env.PUBLIC_URL+"/Images/icon7.png"} alt='img' />
                <div className="txt-lt">
      <h2>Testing</h2>
      <p>We ensure bug-free, high-performance apps through expert testing.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad3' src={process.env.PUBLIC_URL+"/Images/icon8.png"} alt='img' />
                <div className="txt-lt">
      <h2>Devops</h2>
      <p>We streamline deployment and scaling with efficient, automated DevOps solutions.</p>
    </div>
  </div>



{/* ////// */}


<div className="ui">
  <img className='shad2' src={process.env.PUBLIC_URL+"/Images/icon9.png"} alt='img' />
                <div className="txt-lt">
      <h2>Application maintenance</h2>
      <p>Reliable application maintenance for performance, security, and updates.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad3' src={process.env.PUBLIC_URL+"/Images/icon10.png"} alt='img' />
                <div className="txt-lt">
      <h2>Support 24/7</h2>
      <p>24/7 support ensuring continuous uptime, stability, and assistance.</p>
    </div>
  </div>

{/* //// */}
    </div>

  </div><br></br><br></br><br></br>
      <Footer/>
 </>

  )
}

export default Service;
