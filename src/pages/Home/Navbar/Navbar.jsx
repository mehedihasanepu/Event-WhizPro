import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/images/logo.png"
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import UserProfile from "../../../componene/UserProfile/UserProfile";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const location = useLocation();
    const isHome = location.pathname === "/";

    const navbarClass = isHome ? "transparent" : "";






    const handleSingOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                toast.success('Sing Out SuccessFull')
            })
    }

    const navLink = <>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/">Home</NavLink>
        {
            user ?
                <button onClick={handleSingOut} className="lg:hidden text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10">Sing out</button>
                :
                <>
                    <NavLink className="lg:hidden text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/login">Login</NavLink>

                    <NavLink className=" lg:hidden text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/register">Register</NavLink>
                </>
        }
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/booking">Booking</NavLink>
        <NavLink className="text-xl font-semibold text-white p-2 px-4 rounded-lg lg:mr-10" to="/blog">Blog</NavLink>



    </>






    return (
        <div className="max-w-screen-lg mx-auto" >
            <div className={`flex flex-row items-center md:px-5 justify-between  lg:w-[1024px] gap-40 md:gap-[450px] lg:gap-20  py-2 md:py-4 px-2 lg:pl-10  bg-[#93502c] lg:rounded-b-2xl ${navbarClass} absolute z-20`}>

                <div>
                    <img className="w-60 lg:w-80" src={logo} alt="" />
                </div>
                <div className="lg:hidden ">
                    <div className=" dropdown flex-row-reverse">
                        <label tabIndex={0} className=" btn px-2 md:px-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content w-40 mt-3 gap-3 z-[2] p-2 shadow relative right-1 bg-black bg-opacity-50 rounded-box flex-row-reverse ">
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
                    <UserProfile></UserProfile>
                    {
                        user ?
                            <button onClick={handleSingOut} className="btn bg-[#ffeacf]">Sing out</button>

                            :
                            <div className="space-x-2">
                                <Link to="/login">
                                    <button className="btn bg-[#ffeacf]">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn bg-[#ffeacf]">Sing Up</button>
                                </Link>


                            </div >
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;






