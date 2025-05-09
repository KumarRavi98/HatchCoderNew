import React, { useEffect, useRef } from 'react';
import '../Style.css';

const OurTech = () => {
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
      <div className="container">
        <div className="tut">
          <h1 className="slide-up h1-active" ref={h1Ref}>Our Tech Stackss</h1>
          <p className="slide-up p-active" ref={pRef}>The wise man therefore always holds in these matters to this principle of selection.</p>
        </div>

        <div className="tech">
          {/* Mobile Development */}
          <div className="left-tech">
            <h2>Mobile development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mob1.png" alt="img" />
                <p>Swift</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob2.png" alt="img" />
                <p>objC</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob3.png" alt="img" />
                <p>Kotlin</p>
              </div>
            </div>

            <br />
            <p>Hybrid</p>
            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mob4.png" alt="img" />
                <p>Flutter</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob5.png" alt="img" />
                <p>React Native</p>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="Right-tech">
            <h2>Web development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mob5.png" alt="img" />
                <p>React.js</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob22.png" alt="img" />
                <p>Angular</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob33.png" alt="img" />
                <p>Vue.js</p>
              </div>
            </div>

            <br />
            <p>Backend</p>
            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mob6.png" alt="img" />
                <p>Node.js</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob7.png" alt="img" />
                <p>TypeScript</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob8.png" alt="img" />
                <p>.Net</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob9.png" alt="img" />
                <p>Python</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob10.png" alt="img" />
                <p>Java</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mob11.png" alt="img" />
                <p>PHP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Development */}
        <br />
        <br />
        <div className="tech">
          <div className="left-tech">
            <h2>Mobile Game Development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mb1.png" alt="img" />
                <p>Unity 3D</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb2.png" alt="img" />
                <p>Unreal</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb3.png" alt="img" />
                <p>AR/VR</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb4.png" alt="img" />
                <p>Godot</p>
              </div>
            </div>
          </div>

          <div className="Right-tech">
            <h2>Web Game Development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="/Images/mb5.png" alt="img" />
                <p>Phaser</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb6.png" alt="img" />
                <p>Construct2/3</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb7.png" alt="img" />
                <p>Three.js</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb8.png" alt="img" />
                <p>Cocos-Creator</p>
              </div>

              <div className="mobimg">
                <img src="/Images/mb9.png" alt="img" />
                <p>Pixi.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTech;
