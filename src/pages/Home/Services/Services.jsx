import { useEffect, useState } from "react";
import Service from "../../../componene/Service/Service";

const Services = () => {
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
        <div style={backgroundStyle}>
            <h2 className="text-5xl text-center font-semibold pt-20">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl px-5  mx-auto mt-10 gap-10" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                {
                    data.map(data => <Service key={data.id} data={data}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
