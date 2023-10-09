import { useEffect, useState } from "react";
import BookingPageBanner from "../../componene/BookingPageBanner/BookingPageBanner";
import BookingPageCard from "../../componene/BookingPageCard/BookingPageCard";


const Booking = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    return (
        <div className="pt-16 md:pt-20 lg:pt-24">
            <BookingPageBanner></BookingPageBanner>


            <div style={backgroundStyle}>
                <h2 className=" text-4xl lg:text-5xl text-center font-semibold pt-20">Which Event You Want to Book</h2>

                <div className=" max-w-screen-lg px-5 space-y-10 mx-auto mt-10 gap-10">
                    {
                        data.map(data => <BookingPageCard key={data.id} data={data}></BookingPageCard>)
                    }
                </div>
            </div>


        </div>
    );

};

export default Booking;