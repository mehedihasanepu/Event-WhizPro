import { Link } from "react-router-dom";

const LeftSideBlog = ({ data }) => {


    const { id, title, img, description, author, publish_date } = data

    return (
        <div>






            <div>
                <div className="card lg:card-side shadow-xl">
                    <figure className=""><img className="h-[40vh] w-[180vh] " src={img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h4 className="text-3xl font-semibold text-[#ff4c05]" >{author}</h4>
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >{publish_date}</h4>
                        <p> {description.slice(0, 195)} <span className="text-[#ff4c05]">Read more</span> </p>
                    </div>
                </div>
            </div>













        </div>
    );
};

export default LeftSideBlog;