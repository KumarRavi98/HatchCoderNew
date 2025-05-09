import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../Style.css';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  {
    image: "/Images/tst.png",
    text: "I have interviewed dozens of web designers/programmers through Upwork. And I've worked with several over the past 10-15 years. Vinayak and his work are the best of the best. He provided a competitive bid and successfully provided all of the services he promised. He was collaborative, communicative, and open to my ideas, notes, and revisions. When something didn't look or function the way I envisioned, Vinayak quickly worked to correct it. He went above and beyond, and I now have a website that is aesthetically pleasing and functions perfectly. I'll definitely be working with him on future projects and highly recommend his services.",
    author: "Justin Colon"
  },
  {
    image: "/Images/Avatar1.png",
    text: "Vinayak has been a wonderful addition to our freelance remote team. He consistently churns out fresh designs and is always asking questions whenever anything is unclear. Vinayak also managed to work his way around our Jira project management board and is always on top of his commitments. He has been very professional and we recommend him to anyone who requires polished UI/UX designs. Thank you, Vinayak!",
    author: "Brandy"
  },
  {
    image: "/Images/Avatar 2.png",
    text: "He is a very creative person, Always listening to feedback, never tires from continues improvement ! Very recommended",
    author: "Noah"
  },
  {
    image: "/Images/Avatar3.png",
    text: "He is a very talented designer. asks all the right questions to help with the final design",
    author: "Shuab"
  },
  {
    image: "/Images/Avatar1.png",
    text: "I worked with Vinayak for a long time and he was always a pleasure to work with. He always puts in extra effort to ensure I am happy and he is a skilled programmer. Highly recommended developer.",
    author: "Julian"
  },
];

export default function App() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const excerptLength = 100; // characters

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 1000 }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper1"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide className="sld" key={index}>
            <div className="hero-im tst-im">
              <img src={process.env.PUBLIC_URL + item.image} alt="img" />
            </div>
            <div className="txt-hr tst">
              <p style={{ minHeight: '100px' }}>
                {expandedIndexes.includes(index)
                  ? item.text
                  : item.text.length > excerptLength
                    ? item.text.substring(0, excerptLength) + '...'
                    : item.text}
              </p>
              {item.text.length > excerptLength && (
                <button
                  onClick={() => toggleReadMore(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1B2F75',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  {expandedIndexes.includes(index) ? 'Read Less' : 'Read More'}
                </button>
              )}
              <div className="social tst-d">
                <div>
                  <h3 style={{ color: '#424242' }}>{item.author}</h3>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={process.env.PUBLIC_URL + '/Images/star1.png'}
                      alt="star"
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
