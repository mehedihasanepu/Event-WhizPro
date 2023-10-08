import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { FaCheckCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import venue_img from "../../../src/assets/images/venue.jpg"

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect } from "react";



const ServiceDetails = () => {




    const lodaerData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const detailes = lodaerData.find(item => item.id === intId)
    const { title, img, img1, img2, short_description, price1, price2, price3, long_description, details, venues } = detailes;
    console.log(title);

    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img3.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const backgroundStyle2 = {
        backgroundImage: `url('/src/assets/images/bg-img4.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div style={backgroundStyle}>
                <div className="max-w-screen-xl h mx-auto">

                    <div className=" max-w-4xl mx-auto pt-28" >


                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className="h-[500px] w-[886px]" src={img} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="h-[500px] w-[886px]" src={img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="h-[500px] w-[886px]" src={img2} />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="bg-[#fff7ee] p-20 rounded-2xl" >
                        <h2 className="text-4xl font-bold text-[#ff4c05]">{title}</h2>
                        <hr />
                        <p className="pt-5 text-lg">{short_description}</p>
                        <br />
                        <p>{long_description}</p>

                    </div>
                </div>
            </div>








            <div style={backgroundStyle2}>


                <div>
                    <div className="py-10">
                        <h1 className="text-5xl text-center pb-2 font-bold">We Are Providing</h1>
                        <hr />
                    </div>

                    <div className="max-w-screen-lg mx-auto">
                        {
                            details.map((item, index) => <div key={index} >

                                <>
                                    <div className="join join-vertical w-full">
                                        <div className="collapse collapse-arrow join-item border border-base-300">
                                            <input type="radio" name="my-accordion-4" />
                                            <div className="collapse-title text-xl font-semibold ">
                                                {item.name}
                                            </div>
                                            <div className="collapse-content">
                                                <p>{item.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </div>
                            )
                        }
                    </div>


                </div>

            </div>


            <div style={backgroundStyle}>
                <div className="max-w-screen-xl  mx-auto pt-10">

                    <div className="py-10 mt-10">
                        <h1 className="text-5xl text-center pb-2 font-bold">Our Packages</h1>
                        <hr />
                    </div>



                    <div className="flex flex-col lg:flex-row " >



                        <div className="bg-[#fff7ee] p-16 w-auto lg:w-[600px] rounded-2xl my-2 lg:my-10 ">
                            <h3 className="text-3xl py-2 font-bold text-center pb-3">Basic</h3>
                            <h1 className="text-5xl font-extrabold text-[#ff4c05] text-center">{price1}</h1>
                            <div className="space-y-2 ">
                                <p className="flex gap-2 items-center"> <FaCheckCircle className="text-green-600"></FaCheckCircle> Photography and Videography</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600"></FaCheckCircle> Venue and logistics management</p>
                                <p className="flex gap-2"> <FaCheckCircle className="text-green-600 "></FaCheckCircle> Venue Seating capacity: 600 seats</p>
                                <p className="flex gap-2"> <FaCheckCircle className="text-green-600 text-xl md:text-base lg:text-2xl"></FaCheckCircle> Basic on-site support for smooth event execution</p>
                            </div>
                        </div>





                        <div className="bg-[#ffeacf] p-16 rounded-2xl lg:rounded-none  ">
                            <h3 className="text-3xl py-2 font-bold text-center">Standard</h3>
                            <h1 className="text-5xl font-extrabold text-[#ff4c05] text-center pb-3">{price2}</h1>
                            <div className="space-y-2 text-base">
                                <p className="flex gap-2 items-center"> <FaCheckCircle className="text-green-600 " ></FaCheckCircle> Photography and Videography</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600 text-xl md:text-base lg:text-xl " ></FaCheckCircle> Comprehensive venue selection and logistics management.</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600   "></FaCheckCircle> Venue Seating capacity: 600 seats</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600 text-2xl md:text-base lg:text-2xl"></FaCheckCircle> Detailed on-site support, including registration and participant assistance</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600 text-lg md:text-base lg:text-lg"></FaCheckCircle> Highly interactive and informative workshop content.</p>
                            </div>
                        </div>




                        <div className="bg-[#fff7ee] p-16 w-auto lg:w-[600px] rounded-2xl my-2 lg:my-10 ">
                            <h3 className="text-3xl py-2 font-bold text-center">Premium</h3>
                            <h1 className="text-5xl font-extrabold text-[#ff4c05] text-center pb-3">{price3}</h1>
                            <div className="space-y-2" >
                                <p className="flex gap-2 items-center"> <FaCheckCircle className="text-green-600"></FaCheckCircle> Photography and Videography</p>
                                <p className="flex gap-2 "> <FaCheckCircle className="text-green-600 text-xl md:text-base lg:text-xl"></FaCheckCircle> Full-scale venue selection and logistics management.</p>
                                <p className="flex gap-2"> <FaCheckCircle className="text-green-600 text-lg md:text-base lg:text-lg"></FaCheckCircle> Venue Seating capacity: 1000 seats or more.</p>
                                <p className="flex gap-2"> <FaCheckCircle className="text-green-600 text-3xl md:text-base lg:text-3xl"></FaCheckCircle> Detailed on-site support, including registration and participant assistance.</p>
                            </div>
                        </div>

                    </div>




                    <div className="py-2 md:py-10 mt-10 ">
                        <h1 className="text-4xl md:text-5xl text-center pb-2 font-bold">Conference Rooms & Hotels</h1>
                        <hr />
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-5 ">


                        <div className="bg-[#fff7ee] p-10 rounded-xl">

                            {
                                venues.map((item, index) => <div key={index} >

                                    <div className="p-3">
                                        <div className="flex ">
                                            <div>
                                                <BsStars className="text-[#ff8f3a] text-xl"></BsStars>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">{item.name}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Address: {item.address}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }

                        </div>


                        <div className="w-full lg:w-1/2">

                            <img src={venue_img} alt="" />

                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;