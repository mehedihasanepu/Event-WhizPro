
const RightSideBlog = ({data}) => {
    const { id, title, img, description, author, publish_date } = data
    return (
        <div>
          
          <div>
                <div className="card lg:card-side shadow-xl">
                    <figure className=""><img className="h-[17vh] w-[25vh] " src={img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p> {description.slice(0, 50)} <span className="text-[#ff4c05]">Read more</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBlog;