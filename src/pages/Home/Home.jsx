import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
        </div>
    );
};

export default Home;