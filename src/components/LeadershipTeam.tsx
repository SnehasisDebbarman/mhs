import React from 'react';

const LeadershipTeam: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-col items-center justify-center p-4 max-w-6xl mx-auto mt-20">
            <div className="w-full  p-6 flex flex-col sm:flex-row">
                <div> <p className='text-[#7B057B] spectral-medium'>Our Team</p>
                    <h1 className="sm:w-1/2 text-sm sm:text-4xl font-bold text-black mb-4 spectral-medium">
                        The Visionary Leadership Behind MHS
                    </h1></div>
                <p className="sm:w-1/2 text-lg text-gray-700 mb-6">
                    Our leadership team is driven by a commitment to innovation, excellence, and the holistic development of every student. With a blend of experience and forward-thinking, they guide MHS in creating a dynamic learning environment where students are empowered to reach their full potential. Their vision shapes every aspect of the school, fostering a culture of growth, inclusivity, and success.
                </p>
            </div>
            <div className="w-full  p-6">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                    alt="Leadership Team"
                    className="w-full h-auto "
                />
            </div>
        </div>
    );
};

export default LeadershipTeam;
