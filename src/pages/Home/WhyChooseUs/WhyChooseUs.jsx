


import video from "../../../assets/images/icon/video.png"
import vanues from "../../../assets/images/icon/vanues.png"
import friend from "../../../assets/images/icon/friend.png"
import unique from "../../../assets/images/icon/unique.png"
import call from "../../../assets/images/icon/call.png"
import idea from "../../../assets/images/icon/idea.png"
const WhyChooseUs = () => {



    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    return (
        <div style={backgroundStyle}>
            <div className="max-w-screen-xl mx-auto py-20">

                <h2 className="text-4xl md:text-5xl text-center font-semibold pt-10" >Why choose us</h2>

                <div className="flex flex-col lg:flex-row items-center my-10 gap-10" data-aos="fade-right">
                    <div className="w-10/12 lg:w-7/12 space-y-2 text-center lg:text-start">
                        <h4 className="text-xl font-semibold">WE ARE EVENT WHIZ PRO</h4>
                        <h2 className="text-3xl md:text-4xl font-extrabold  md:font-semibold ">No.1 Educational and Training Events Management</h2>
                        <p className="text-lg">We are a dynamic educational and training events management company dedicated to empowering individuals and organizations through innovative workshops, webinars, career fairs, educational conferences, and training programs.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-20 bg-white p-5 rounded-2xl " data-aos="fade-left">
                        <div>
                            <img className="h-14 w-14 mx-auto" src={friend} alt="" />
                            <p className="font-bold">Friendly Team</p>
                            <p>More than 200 teams</p>
                        </div>
                        <div className="space-y-1">
                            <img className="h-14 w-14 mx-auto" src={vanues} alt="" />
                            <p className="font-bold">Perfact Venues</p>
                            <p>More then 50 venues</p>
                        </div>
                        <div className="space-y-1">
                            <img className="h-14 w-14 mx-auto" src={unique} alt="" />
                            <p className="font-bold">Unique Scenario</p>
                            <p>We thinking out of the box</p>
                        </div>
                        <div className="space-y-1">
                            <img className="h-14 w-14 mx-auto" src={video} alt="" />
                            <p className="font-bold">Photography and Videography</p>
                            <p>We have big Photography and Videography team</p>
                        </div>
                        <div className="space-y-1">
                            <img className="h-14 w-14 mx-auto" src={call} alt="" />
                            <p className="font-bold">24/7 Hours Support</p>
                            <p>Anytime anywhere</p>
                        </div>
                        <div className="space-y-1">
                            <img className="h-14 w-14 mx-auto" src={idea} alt="" />
                            <p className="font-bold">Briliant Idea</p>
                            <p>We have million idea</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyChooseUs;