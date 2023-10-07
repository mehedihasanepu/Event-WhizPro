import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {

    const navLink = <>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg mr-10" to="/">Home</NavLink>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg mr-10" to="/login">Login</NavLink>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg mr-10" to="/register">Register</NavLink>
    </>
    return (
        <div className="max-w-screen-xl mx-auto" >
            <div className="flex flex-row-reverse lg:flex-row items-center md:px-5 justify-between gap-0 lg:gap-[700px]  pt-6 pl-10 lg:absolute lg:z-20">
                <div className="lg:hidden ">
                    <div className=" dropdown flex-row-reverse">
                        <label tabIndex={0} className=" btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[2] p-2 shadow relative right-1 bg-black bg-opacity-50 rounded-box flex-row-reverse ">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <a className=" text-black lg:text-white font-semibold text-2xl">Event WhizPro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul >
                        {
                            navLink
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;