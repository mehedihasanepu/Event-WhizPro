
const Service = ({ data }) => {
    const { title, img, short_description, price1 } = data


    return (
        <div className="drop-shadow-2xl ">
            <div className="card  glass bg-white">
                <figure className=""><img className="h-60 w-full rounded-t-2xl " src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl ">{title}</h2>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price start from {price1}</h4>
                    <hr />
                    <p> {short_description.slice(0, 250)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;