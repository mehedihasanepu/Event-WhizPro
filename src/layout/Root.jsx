import { Outlet } from "react-router-dom";
import "./root.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



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
            <Outlet></Outlet>
        </div>
    );
};

export default Root;