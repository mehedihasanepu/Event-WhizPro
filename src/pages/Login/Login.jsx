
import singInImg from "../../../src/assets/images/signin.gif"

import google from "../../../src/assets/images/icon/google.png"
import github from "../../../src/assets/images/icon/github.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {


    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };

    const { singIn,googleSingIn } = useContext(AuthContext);
    const location = useLocation();

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);


        // sing in user 
        singIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }



    const handleGoogleSingIn = () => {

        googleSingIn()
            .then(result => {
                navigate("/")
                console.log(result);
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div style={backgroundStyle} className="h-full">
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse mt-20 w-full">
                        <div className="text-center lg:text-left">
                            <img className="h-[500px] w-[550px] rounded-2xl" src={singInImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 h-[550px] w-full max-w-md bg-zinc-50">




                            <form onSubmit={handleLogin} className="card-body">
                                <div>
                                    <h2 className="text-4xl font-bold text-[#ff4c05ec] text-center">Account Login</h2>
                                    <p className="pt-2 te">Does not have an account ? <Link to="/register" className="text-[#ff4c05ec] font-bold ">Sing up</Link> </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email@example.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className=" btn rounded-3xl bg-gradient-to-r from-[#ff4c05db] to-[#ffa719d8] text-white">Login Now</button>
                                </div>
                                <div className="mt-2">
                                    <p className="text-center">———————— Or Login With ————————</p>
                                    <div className="flex items-center justify-around mt-4">
                                        <div onClick={handleGoogleSingIn} className="flex items-center gap-2 border border-[#ff4c05db] p-1 px-2 rounded-xl cursor-pointer">
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