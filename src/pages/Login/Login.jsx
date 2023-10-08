import Navbar from "../Home/Navbar/Navbar";
import singUp from "../../../src/assets/images/Signup.gif"
import singIn from "../../../src/assets/images/Signin.gif"
import google from "../../../src/assets/images/icon/google.png"
import github from "../../../src/assets/images/icon/github.png"
import { Link } from "react-router-dom";
const Login = () => {


    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };




    return (
        <div style={backgroundStyle} className="h-screen">
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse mt-20 w-full">
                        <div className="text-center lg:text-left">
                            <img className="h-[500px] w-[550px] rounded-2xl" src={singIn} alt="" />
                        </div>
                        <div className="card flex-shrink-0 h-[550px] w-full max-w-md bg-zinc-50">
                            <form className="card-body">
                                <div>
                                    <h2 className="text-4xl font-bold text-[#ff4c05ec] text-center">Account Login</h2>
                                    <p className="pt-2 te">Does not have an account ? <Link to="/register" className="text-[#ff4c05ec] font-bold ">Sing up</Link> </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="email" placeholder="email@example.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn rounded-3xl bg-gradient-to-r from-[#ff4c05db] to-[#ffa719d8] text-white">Login Now</button>
                                </div>
                                <div className="mt-2">
                                    <p className="text-center">———————— Or Login With ————————</p>
                                    <div className="flex items-center justify-around mt-4">
                                        <div className="flex items-center gap-2 border border-[#ff4c05db] p-1 px-2 rounded-xl cursor-pointer">
                                            <img className="w-10 " src={google} alt="" />
                                            <p className="font-bold">Google</p>
                                        </div>
                                        <div className="flex items-center gap-2 border border-[#ff4c05db] p-1 px-2 rounded-xl cursor-pointer">
                                            <img className="w-10" src={github} alt="" />
                                            <p className="font-bold">GitHub</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;