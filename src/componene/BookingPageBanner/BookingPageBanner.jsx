import bannerImg3 from "../../../src/assets/images/banner-img4.jpg";
const BookingPageBanner = () => {
    return (
        <div>
             <div className="relative ">
                <div >
                    <img className=" h-[300px] md:h-[400px] lg:h-[500px] w-full" src={bannerImg3} alt="" />
                </div>
                <div className=" min-h-full min-w-full bg-black absolute top-0 left-0 bg-opacity-60">
                    <div className="flex justify-center items-center h-[280px] md:h-[380px] lg:h-[470px]">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">Event WhizPro <span className="text-[#ff6e34] text-3xl md:text-4xl lg:text-6xl">Booking</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPageBanner;