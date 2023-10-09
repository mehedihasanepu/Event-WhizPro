import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CustomerBookingInfo = () => {
    const navigate = useNavigate()


    const handleBooking = () => {
        navigate("/")
        toast.success('Booking Successfull')
    }

    return (
        <div>
            <div className="card flex-shrink-0 mx-auto max-w-md bg-zinc-50">



                <form className="card-body">
                    <div>
                        <h2 className="text-4xl font-bold text-[#ff4c05ec] text-center">Booking Information</h2>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className=" input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className=" input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Which Package You Want</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Package</option>
                            <option>Basic</option>
                            <option>Standard</option>
                            <option>Premium</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Which Venues You Want</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Venues</option>
                            <option>Bangabandhu International Conference Center</option>
                            <option>Pan Pacific Sonargaon Dhaka Hotel</option>
                            <option>BAF Falcon Hall</option>
                            <option>The Waterfront Convention Hall</option>

                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Event Date</span>
                        </label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">You Have Any Requirement</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Optional"></textarea>
                    </div>




                    <div onClick={handleBooking} className="form-control mt-2">
                        <button className="btn rounded-3xl bg-gradient-to-r from-[#ff4c05db] to-[#ffa719d8] text-white">Confirm Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerBookingInfo;