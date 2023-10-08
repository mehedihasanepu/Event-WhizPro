
import singUp from "../../../src/assets/images/Signup.gif"
import google from "../../../src/assets/images/icon/google.png"
import github from "../../../src/assets/images/icon/github.png"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import toast  from "react-hot-toast";
const Register = () => {



    const { createUser, googleSingIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const PhotoURL = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        const accepted = form.get("checked")
        console.log(name, PhotoURL, email, password);


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least 1 uppercase character');
            return;
        }
        else if (!/[!@#$%^&*()_\-+=[\]{}|\\;:'"<>,.?/]/.test(password)) {
            setRegisterError('Password should have one special character');
            return;
        }
        else if (!accepted) {
            setRegisterError("Please accept out terms and conditions");
            return;
        }

        //reset
        setRegisterError('')

        // Create User 
        createUser(email, password)
            .then(result => {
                navigate("/")
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: PhotoURL
                })
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })






    }
    //Sing in with google
    const handleGoogleSingIn = () => {

        googleSingIn()
            .then(result => {
                navigate("/")
                console.log(result.user);
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }







    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };





    return (
        <div style={backgroundStyle} className="h-full">
            <div className="mb-20">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row mt-14 w-full">
                        <div className="text-center lg:text-left">
                            <img className="  md:h-96 md:w-96 lg:h-[500px] lg:w-[550px] rounded-2xl" src={singUp} alt="" />
                        </div>
                        <div className="card flex-shrink-0 h-[550px] w-full max-w-md bg-zinc-50">




                            <form onSubmit={handleRegister} className="card-body">
                                <div>
                                    <h2 className="text-4xl font-bold text-[#ff4c05ec] text-center">Register</h2>
                                    <p className="pt-2 te">All ready have an account ? <Link to="/login" className="text-[#ff4c05ec] font-bold ">Log in</Link> </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className=" input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="upload img URl" className="input input-bordered" />
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
                                <div className="flex items-center">
                                    <input className="h-4 w-4" type="checkbox" name="checked" />
                                    <label className="pl-2">Accept terms and conditions</label>
                                </div>


                                <p className="text-red-600">{registerError}</p>


                                <div className="form-control mt-2">
                                    <button className="btn rounded-3xl bg-gradient-to-r from-[#ff4c05db] to-[#ffa719d8] text-white">Sing Up</button>
                                </div>
                                <div className="mt-2">
                                    <p className="text-center text-xs md:text-base">———— Or Sing up With ————</p>
                                    <div className="flex items-center justify-around mt-4 ">
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

export default Register;