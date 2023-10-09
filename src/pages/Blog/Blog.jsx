import { useEffect, useState } from "react";
import BlogPageBanner from "../../componene/BlogPageBanner/BlogPageBanner";
import LeftSideBlog from "../../componene/LeftSideBlog/LeftSideBlog";
import RightSideBlog from "../../componene/RightSideBlog/RightSideBlog";

const Blog = () => {



    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/bg-img.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-16 md:pt-20 lg:pt-24">
            <BlogPageBanner></BlogPageBanner>
            <div style={backgroundStyle} >
                <div className="max-w-screen-xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">

                        <div className=" md:col-span-2 lg:col-span-8">

                            <div className=" max-w-screen-lg px-5 space-y-5 lg:space-y-10 mx-auto mt-10 gap-10">
                                <h2 className="text-4xl py-5 lg:py-0 font-bold text-[#ff4c05]">All Blogs</h2>
                                {
                                    data.map(data => <LeftSideBlog key={data.id} data={data}></LeftSideBlog>)
                                }
                            </div>
                        </div>





                        <div className=" md:col-span-1 lg:col-span-4">
                            <div className="col-span-3">

                                <div className=" max-w-screen-lg px-5 space-y-3 mx-auto mt-10 gap-10">
                                    <h2 className="text-2xl py-5 lg:py-0 font-bold text-[#ff4c05]">Recent Blogs</h2>
                                    {
                                        data.slice(4, 10).map(data => <RightSideBlog key={data.id} data={data}></RightSideBlog>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;