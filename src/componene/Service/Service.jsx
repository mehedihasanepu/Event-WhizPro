/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Service = ({ data }) => {
    const {id, title, img, short_description, price1 } = data


    return (
        <div className="drop-shadow-2xl ">
            <div className="card   glass bg-stone-50 bg-opacity-70 h-[580px]">
                <figure className=""><img className="h-60 w-full rounded-t-2xl " src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl ">{title}</h2>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price start from {price1}</h4>
                    <hr />
                    <p> {short_description.slice(0, 195)}...</p>
                    <Link to={`/serviceDetails/${id}`} className="card-actions  ">
                        <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">See Details !</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;