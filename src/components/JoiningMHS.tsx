import React from 'react';

const JoiningMHS: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-4  max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 p-6 py-12 bg-[#7B057B] text-white">
                <h1 className="text-3xl font-bold mb-4 spectral-medium">Joining MHS</h1>
                <p className="text-sm mb-6">
                    We are proud to offer a seamless educational journey through our Junior Schools. Each stage has its own vibrant character, welcoming students at various entry points.
                </p>
                <p className="text-sm mb-6">
                    Regardless of your child’s age, our dedicated Admissions team is here to guide you through the process and address any questions you may have, ensuring a smooth transition into the MHS community.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-white text-[#7B057B] px-6 py-2 rounded-full font-semibold text-sm">
                        Book a Visit
                    </button>
                    <button className="border border-white text-#7B057B px-6 py-2 rounded-full font-semibold text-sm">
                        Apply Now
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
                <img
                    src="https://images.unsplash.com/photo-1544830281-1d5169d6b2af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                    alt="Children in classroom"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default JoiningMHS;
