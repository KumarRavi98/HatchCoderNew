import React, { useEffect, useRef } from 'react';
import '../Style.css';

const Portfolio = ({ id }) => {
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
    
    <div className="tut">
    {/* <img style={{textAlign:'left'}} className='line' src={process.env.PUBLIC_URL+"/line.png"} alt="line-img" /> */}

      <h1 className="slide-up h1-active" ref={h1Ref}>Here are few our recent works</h1>
      <p className="slide-up p-active" ref={pRef}>The wise man therefore always holds in these matters to this principle of selection.</p>
      

    </div>

<div className="container">

<div className="btn1">
<button>View All <img src='/Images/arrow1.png' alt='img'></img></button>
</div>
    



 <div id={id} className="service">

<div className="ser">

   <a  target='_blank' href='https://bitdials.eu/'> <img src='/Images/app1.png' alt='img'></img>
    <h2>Bit Dials </h2>
    <p>BitDials.eu is an online luxury boutique that specializes in selling high-end luxury watches and other luxury goods using digital currency, particularly Bitcoin. </p>
    </a>
</div>

<div className="ser">

<a  target='_blank' href='https://aairhvac.com/'> <img src='/Images/app2.png' alt='img'></img>
    <h2>American HVAC</h2>
    <p>we specialize in providing top-tier heating and cooling solutions that keep your home or business comfortable all year round.</p>
</a>
</div>



 </div>



 <div className="service serv1">

<div className="ser">

<a  target='_blank' href='https://legodesk.com/'>  <img src='/Images/app3.png' alt='img'></img>
    <h2>Lego Desk</h2>
    <p>Lego Desk simplify legal processes to keep you competitive, offering automation, delinquency tracking, and collaboration tools to digitize and streamline your legal operations.</p>
</a>
</div>

<div className="ser ser2">

<a  target='_blank' href='https://bitsky.world/'>  <img src='/Images/app4.png' alt='app-image'></img>
    <h2>Bitsky</h2>
    <p>BitSky manages your private business jet flight and also takes care of a full range of additional services. We will order a gourmet catering, book a limousine or even helicopter transfer, yacht and hotel. Let us arrange your trip with the highest expectations!</p>
</a>
</div>

 </div>

 <div className="service serv2">

<div className="ser">

<a  target='_blank' href='https://justincolonbooks.com/'>  <img src='/Images/app5.png' alt='img'></img>
    <h2>Justin Colon</h2>
    <p>Justin Colón is a children's author and professional actor who crafts imaginative picture books like The Quacken and Impossible Possums. His website offers editorial services, school visit information, and interactive content for readers of all ages.</p>
</a>
</div>

<div className="ser ser2">

<a  target='_blank' href='https://airhvaclandingpage.hatchcoders.com/'>  <img src='/Images/app6.png' alt='app-image'></img>
    <h2>American AIRHVAC</h2>
    <p>The Air HVAC landing page showcases professional heating, ventilation, and air conditioning services with a clean, user-friendly design.</p>
</a>
</div>



 </div>




 </div>

    </>
  );
};

export default Portfolio;

