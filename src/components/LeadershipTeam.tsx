import React from 'react';
import leadership_img from "../assets/leadership/leadership.png"

const LeadershipTeam: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-col items-center justify-center p-4 max-w-6xl mx-auto mt-20 sm:my-20 sm:mb-32">
            <div className="w-full  p-6 flex flex-col sm:flex-row">
                <div className='flex-1'> <p className='spectral-medium text-[#B508B5] mb-4 text-lg'>Our Team</p>
                    <h1 className="text-5xl font-bold text-gray-950 mb-4 spectral-medium p-4 pl-0 pt-0">
                        The Visionary Leadership Behind MHS
                    </h1></div>
                <p className="flex-1 text-lg text-gray-700 mb-6 p-4">
                    Our leadership team is driven by a commitment to innovation, excellence, and the holistic development of every student. With a blend of experience and forward-thinking, they guide MHS in creating a dynamic learning environment where students are empowered to reach their full potential. Their vision shapes every aspect of the school, fostering a culture of growth, inclusivity, and success.
                </p>
            </div>
            <div className="w-full  p-6">
                <img
                    src={leadership_img}
                    alt="Leadership Team"
                    className="w-full h-auto "
                />
            </div>
        </div>
    );
};

export default LeadershipTeam;
