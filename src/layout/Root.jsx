import { Outlet } from "react-router-dom";
import "./root.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import { Toaster } from "react-hot-toast";



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
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;