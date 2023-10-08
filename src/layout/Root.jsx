import { Outlet } from "react-router-dom";
import "./root.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";



const Root = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 900,
            easing: 'ease-in-out',
        });
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;