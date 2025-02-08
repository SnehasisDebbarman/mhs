import React from 'react';

const LatestNews: React.FC = () => {
    return (
        <div className='bg-[#FEF0FE]'>
            <div className="flex flex-col md:flex-row items-center justify-center p-4 max-w-6xl mx-auto h-screen">
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
                <div className=" relative md:w-1/2">
                    <div className="absolute inset-0 bg-purple-300 top-10 left-10 z-0 w-full  "></div>
                    <div className="w-full m-5 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 opacity-100 z-10"></div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664301311322-e778de6426f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                            alt="Children learning"
                            className="w-full h-auto aspect-square object-cover"
                        />
                        <div className="absolute bottom-0 left-0  p-4 m-4 border-t border-white z-20">
                            <h2 className=" font-semibold  mb-2">
                                Developing a lifelong love of Learning
                            </h2>
                            <p className="text-white text-sm">
                                We are a forward-thinking school, dedicated to academic excellence and driven by a passion for progress.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
