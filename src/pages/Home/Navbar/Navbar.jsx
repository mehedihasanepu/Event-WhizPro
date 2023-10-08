import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/images/logo.png"
import bannerImg4 from "../../../assets/images/banner-img4.jpg";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const navbarClass = isHome ? "transparent" : "";

    const navLink = <>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/">Home</NavLink>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/login">Login</NavLink>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/register">Register</NavLink>
    </>
    return (
        <div className="max-w-screen-xl mx-auto" >
            <div className={`flex flex-row items-center md:px-5 justify-between gap-40 md:gap-[450px] lg:gap-96  py-2 md:py-4 px-2 lg:pl-10 bg-[#93502c] lg:rounded-b-2xl ${navbarClass} lg:absolute lg:z-20`}>

                <div>
                    <img className="w-60 lg:w-80" src={logo} alt="" />
                </div>
                <div className="lg:hidden ">
                    <div className=" dropdown flex-row-reverse">
                        <label tabIndex={0} className=" btn px-2 md:px-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[2] p-2 shadow relative right-1 bg-black bg-opacity-50 rounded-box flex-row-reverse ">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex lg:items-center">
                    <ul >
                        {
                            navLink
                        }
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={bannerImg4} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;






