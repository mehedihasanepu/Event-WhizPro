/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookingPageCard = ({ data }) => {

    const { id, title, img, short_description, price1 } = data

    return (
        <div>





            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <figure className=""><img className="h-[50vh] w-[200vh] rounded-t-2xl " src={img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price start from {price1}</h4>
                        <p> {short_description.slice(0, 195)}...</p>
                        <Link to={`/bookingItemDetails/${id}`} className="card-actions  ">
                            <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">Book Now!</button>
                        </Link>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default BookingPageCard;