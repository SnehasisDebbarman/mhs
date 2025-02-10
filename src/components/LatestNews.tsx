import React from 'react';
import letest_img from "../assets/latest-news/latest-news.png"
import arrow_right from "../assets/arrow-right.svg"

const LatestNews: React.FC = () => {
    return (
        <div className='bg-[#FEF0FE]'>
            <div className="flex flex-col md:flex-row items-center justify-center p-4 max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 p-6">
                    <p className='spectral-medium text-[#B508B5] mb-4'>Featured News & Article</p>
                    <h2 className="text-5xl font-bold text-gray-950 mb-4 spectral-medium sm:w-3/5">
                        Latest News from MHS
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        An innovative curriculum that sparks academic curiosity and fuels a passion for learning. Our classrooms are spaces where challenging questions are embraced, deepening understanding and critical thinking. Every student is valued and welcomed for who they are, creating a supportive environment that nurtures individuality.
                    </p>
                    <button className="text-purple-600 font-semibold hover:underline">
                        Read More
                    </button>
                </div>
                <div className="relative md:w-1/2 h-screen">
                    <div className="absolute aspect-square inset-0 bg-purple-300 w-full top-5"></div>

                    <div className="w-full relative mb-0  mt-4 hover:-ml-5 hover:mt-0 transition-all duration-700">
                        <img src={arrow_right} alt="" className='absolute z-50 right-0' />
                        <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 opacity-100 z-0"></div>
                        <div className="absolute bottom-0 left-0  p-4 m-4 border-t border-white z-10">
                            <h2 className=" font-semibold  mb-2  hover:scale-105 transition-all">
                                Developing a lifelong love of Learning
                            </h2>
                            <p className="text-white text-sm">
                                We are a forward-thinking school, dedicated to academic excellence and driven by a passion for progress.
                            </p>
                        </div>
                        <img
                            src={letest_img}
                            alt="Children learning"
                            className="w-full h-auto aspect-square object-cover z-20"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
