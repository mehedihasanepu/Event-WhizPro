
import { NavLink } from "react-router-dom";

const Gallery = () => {




    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };




    return (
        <div style={backgroundStyle} >
            <h2 className=" text-4xl lg:text-5xl text-center font-semibold pt-20 pb-10">Gallery</h2>

            <div className=" max-w-screen-xl mx-auto ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

                    <div className="col-span-2 relative group">
                        <img
                            className="w-full h-[355px] transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/RjjQyQ2/workshops2.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>




                    <div className="col-span-2 relative group">
                        <img
                            className="w-full h-[355px] transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/jLZZsR6/workshops1.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>






                    <div className=" col-span-2 lg:col-span-1 relative group">
                        <img
                            className="w-full h-[355px] lg:h-auto transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/HhvhL83/career-fairs.png"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 relative group">
                        <img
                            className="w-full  h-[355px] lg:h-[214px] transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/59wckr0/professional-development.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1  relative group">
                        <img
                            className="w-full h-[355px] lg:h-auto transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/VtF7V8f/professional-development1.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>



                    <div className="lg:col-span-2 relative group">
                        <img
                            className="w-full h-[355px] transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/WgDDkV9/professional-development2.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>


                    <div className="col-span-2 relative group">
                        <img
                            className="w-full h-[355px] transition-transform duration-500 hover:brightness-50"
                            src="https://i.ibb.co/dftrbmk/educational-technology2.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="w-16 h-16 bg-opacity-75 flex items-center justify-center">
                                <NavLink className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffad2a] text-white " onClick={() => document.getElementById('my_modal_3').showModal()} to="/booking">Booking</NavLink>

                            </div>
                        </div>
                    </div>


                </div>

            </div>



        </div>
    );
};

export default Gallery;