/* eslint-disable react/prop-types */

const RightSideBlog = ({ data }) => {
    const { title, img, description,  } = data
    
    return (
        <div>

            <div>
                <div className="card lg:card-side shadow-xl">
                    <figure data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"><img className="h-[17vh] w-[25vh] " src={img} alt="car!" /></figure>
                    <div className="card-body" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <h2 className="card-title">{title}</h2>
                        <p> {description.slice(0, 50)} <span className="text-[#ff4c05]">Read more</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBlog;