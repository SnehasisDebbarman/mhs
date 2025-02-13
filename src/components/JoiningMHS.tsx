import React, { useState } from 'react';
import joining_mhs from "../assets/joining-mhs/joining-mhs.png"
import ContactForm from './ui/contact-form';

const JoiningMHS: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };
    return (
        <div className="flex  flex-col h-full md:flex-row items-center justify-center p-4  max-w-6xl mx-auto">
            <div className="w-full h-[70vh] md:w-1/2 p-6 sm:p-12 sm:pl-20 py-12 mx-auto  flex flex-col justify-center  bg-[#7B057B] text-white ">
                <h1 className="text-3xl font-bold mb-4 spectral-medium ">Joining MHS</h1>
                <p className="text-sm mb-6 sm:pr-20">
                    We are proud to offer a seamless educational journey through our Junior Schools. Each stage has its own vibrant character, welcoming students at various entry points.
                </p>
                <p className="text-sm mb-6 sm:pr-20">
                    Regardless of your child’s age, our dedicated Admissions team is here to guide you through the process and address any questions you may have, ensuring a smooth transition into the MHS community.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div onClick={openForm} className=" cursor-pointer hover:scale-105 transition-all duration-500 bg-white text-[#7B057B] px-6 py-2 rounded-full font-semibold text-sm text-center">
                        Book a Visit
                    </div>
                    <div onClick={openForm} className="cursor-pointer hover:scale-105 transition-all duration-500 border border-white text-#7B057B px-6 py-2 rounded-full font-semibold text-sm text-center">
                        Apply Now
                    </div>
                </div>
            </div>
            <div className="w-full h-[70vh] md:w-1/2 ">
                <img
                    src={joining_mhs}
                    alt="Children in classroom"
                    className="w-full h-[70vh] object-cover"
                />
            </div>
            {isFormOpen && <ContactForm onClose={closeForm} />}
        </div>
    );
};

export default JoiningMHS;
