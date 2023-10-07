/* 


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImg1 from "../../../assets/images/banner-img1.jpg";
import bannerImg2 from "../../../assets/images/banner-img2.jpg";
import bannerImg3 from "../../../assets/images/banner-img3.jpg";
import bannerImg4 from "../../../assets/images/banner-img4.jpg";
import bannerImg5 from "../../../assets/images/banner-img5.webp";
import bannerImg6 from "../../../assets/images/banner-img6.jpg";

const Header = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slideStyle = {
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.05)",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "5xl",
  };

  return (
    <div>
      <div >
        <Slider {...settings}>
          <div style={slideStyle}>
            <img className="h-[600px] w-screen" src={bannerImg1} alt="" />
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <p>hiiiiiiiiii motherfucker</p>
            </div>
          </div>
          <div style={slideStyle}>
            <img className="h-[600px] w-screen" src={bannerImg2} alt="" />
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <p>hiiiiiiiiii motherfucker</p>
            </div>
          </div>
          <div style={slideStyle}>
            <img className="h-[600px] w-screen" src={bannerImg3} alt="" />
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <p>hiiiiiiiiii motherfucker</p>
            </div>
          </div>
          <div style={slideStyle}>
            <img className="h-[600px] w-screen" src={bannerImg4} alt="" />
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <p>hiiiiiiiiii motherfucker</p>
            </div>
          </div>
          <div style={slideStyle}>
            <img className="h-[600px] w-screen" src={bannerImg1} alt="" />
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <p>hiiiiiiiiii motherfucker</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
 */








import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import bannerImg1 from "../../../assets/images/banner-img1.jpg";
import bannerImg2 from "../../../assets/images/banner-img2.jpg";
import bannerImg3 from "../../../assets/images/banner-img3.jpg";
import bannerImg4 from "../../../assets/images/banner-img4.jpg";
import bannerImg5 from "../../../assets/images/banner-img5.webp";
import bannerImg6 from "../../../assets/images/banner-img6.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";


const Header = () => {

    const settings = {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
    };
    return (
        <div className="relative"  >
            <Swiper {...settings} className="mySwiper" navigation={true}>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg1} alt="" />

                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-60 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3 ">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg2} alt="" />
                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg3} alt="" />
                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg4} alt="" />
                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg5} alt="" />
                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className="h-screen w-screen" src={bannerImg6} alt="" />
                        <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white ">
                            <div className="hero-continent text-center">
                                <h2 className="text-6xl font-semibold">One Stop</h2>
                                <h1 className="text-8xl font-bold mt-3">Event Planner</h1>
                                <p className="tracking-widest">
                                    Every Event Should Be Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;