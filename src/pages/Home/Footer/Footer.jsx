import logo from "../../../assets/images/logo-black.png"
import { FaLocationPin } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
const Footer = () => {
    return (
        <div>
            <footer className="footer justify-center md:gap-6 lg:gap-28 items-center text-center md:text-start p-10 py-24 bg-base-200 text-base-content ">
                <div>
                    <aside>
                        <img className="w-64 md:w-96 lg:w-96 pb-3" src={logo} alt="" />
                        <p className="text-base lg:text-lg">Event WhizPro<br />Providing Educational and Training Events Management Service</p>
                    </aside>
                </div>
                <nav >
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Workshops</a>
                    <a className="link link-hover">Career Fairs</a>
                    <a className="link link-hover">Educational Conferences</a>
                    <a className="link link-hover">Educational Technology Conferences</a>
                </nav>
                <nav >
                    <header className="footer-title">Event WhizPro</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav >
                    <header className="footer-title">Contact</header>
                    <p className=" flex text-base  items-center gap-2"><FaLocationPin className="text-lg text-[#ff4c05]"></FaLocationPin> 100 highland ave, california, united state</p>
                    <p className=" flex text-base items-center gap-2"><AiOutlineMail className="text-lg text-[#ff4c05]"></AiOutlineMail> contact@pantero.com</p>
                    <p className=" flex text-base items-center gap-2"><BiSolidPhoneCall className="text-lg text-[#ff4c05]"></BiSolidPhoneCall> 100 800 1234 5555</p>
                </nav>
            </footer>
        </div >
    );
};

export default Footer;