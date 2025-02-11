// Import necessary libraries
import React from 'react';
import { motion } from 'motion/react';
import our_promise from "../assets/our-promise/our-promise.png"

// Define the component
const OurPromise: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-8 max-w-6xl mx-auto rounded-lg ">
            <div className="md:w-1/2 p-4 flex flex-col justify-center ">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" mb-2 text-lg spectral-light text-[#B508B5]"
                >
                    Our Offer </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-800 mb-4 spectral-medium"
                >
                    Our Promise to Our Students & Families
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-500 mb-6 text-sm font-medium"
                >
                    An innovative curriculum that sparks academic curiosity and fuels a passion for learning. Our classrooms are spaces where challenging questions are embraced, deepening understanding and critical thinking. Every student is valued and welcomed for who they are, creating a supportive environment that nurtures individuality.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-500 mb-6 text-sm font-medium"
                >
                    By recognizing and fostering each student's unique potential, we empower them to grow, thrive, and succeed. This is Matrix High School. This is where you belong.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-max bg-[#B508B5] hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full"
                >
                    Book a Visit
                </motion.div>
            </div>
            <div className="md:w-2/3 flex items-center justify-end h-1/3 p-4 ">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    src={our_promise}
                    alt="Student"
                    className="sm:w-3/4 aspect-[3/4] object-cover"
                />
            </div>
        </div >
    );
};

export default OurPromise;
