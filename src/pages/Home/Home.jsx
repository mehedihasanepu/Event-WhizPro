import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
        </div>
    );
};

export default Home;