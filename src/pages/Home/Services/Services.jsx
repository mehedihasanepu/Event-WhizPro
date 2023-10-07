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

            <div className="grid grid-cols-3 max-w-screen-xl mx-auto mt-10 gap-10">
                {
                    data.map(data => <Service key={data.id} data={data}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
