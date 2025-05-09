import React   from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css';


import '../Style.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='sld'>
          <div className="hero-im">

           <img src={process.env.PUBLIC_URL+"/Images/Avatar.png"} alt='img'/>
          </div>
           <div className="txt-hr">
              <h2>James Anderson</h2>
              <h3>Director and Planning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="social">
                <img src={process.env.PUBLIC_URL+"/Images/in.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"/Images/twitter.png"} alt='img'/>
              </div>
           </div>

        </SwiperSlide>
        


{/* /////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im">

           <img src={process.env.PUBLIC_URL+"/Images/Avatar1.png"} alt='img'/>
          </div>
           <div className="txt-hr">
              <h2>Chabelet Cosny</h2>
              <h3>Director and Planning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="social">
                <img src={process.env.PUBLIC_URL+"/Images/in.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"/Images/twitter.png"} alt='img'/>
              </div>
           </div>

        </SwiperSlide>


{/* //////////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im">

           <img src={process.env.PUBLIC_URL+"/Images/Avatar 2.png"} alt='img'/>
          </div>
           <div className="txt-hr">
              <h2>Micheal</h2>
              <h3>Director and Planning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="social">
                <img src={process.env.PUBLIC_URL+"/Images/in.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"/Images/twitter.png"} alt='img'/>
              </div>
           </div>

        </SwiperSlide>


{/* ///////////// */}
        
<SwiperSlide className='sld'>
          <div className="hero-im">

           <img src={process.env.PUBLIC_URL+"/Images/Avatar3.png"} alt='img'/>
          </div>
           <div className="txt-hr">
              <h2>Addom Smith</h2>
              <h3>Director and Planning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="social">
                <img src={process.env.PUBLIC_URL+"/Images/in.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"/Images/twitter.png"} alt='img'/>
              </div>
           </div>




        </SwiperSlide>


{/* //////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im">

           <img src={process.env.PUBLIC_URL+"/Images/Avatar1.png"} alt='img'/>
          </div>
           <div className="txt-hr">
              <h2>James Anderson</h2>
              <h3>Director and Planning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="social">
                <img src={process.env.PUBLIC_URL+"/Images/in.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"/Images/twitter.png"} alt='img'/>
              </div>
           </div>

        </SwiperSlide>













      </Swiper>
    </>
  );
}
