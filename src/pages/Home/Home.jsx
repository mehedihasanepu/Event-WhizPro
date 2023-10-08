import { useEffect } from "react";
import Header from "./Header/Header";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header></Header>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
        </div>
    );
};

export default Home;