// Import necessary libraries
import React from 'react';
import { motion } from 'motion/react';

// Define the component
const OurPromise: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-8 max-w-6xl mx-auto rounded-lg ">
            <div className="md:w-1/2 p-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" mb-6 spectral-light text-[#B508B5]"
                >
                    Our Offer </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-800 mb-4 spectral-light"
                >
                    Our Promise to Our Students & Families
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-700 mb-6 text-sm"
                >
                    An innovative curriculum that sparks academic curiosity and fuels a passion for learning. Our classrooms are spaces where challenging questions are embraced, deepening understanding and critical thinking. Every student is valued and welcomed for who they are, creating a supportive environment that nurtures individuality.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-700 mb-6 text-sm"
                >
                    By recognizing and fostering each student's unique potential, we empower them to grow, thrive, and succeed. This is Matrix High School. This is where you belong.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-[#B508B5] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Book a Visit
                </motion.button>
            </div>
            <div className="md:w-2/3 flex items-center justify-center h-1/3 p-4">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    src="https://images.unsplash.com/photo-1560796819-89ab1929cdd2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Student"
                    className=" w-3/4 aspect-square object-cover rounded-lg shadow-md"
                />
            </div>
        </div >
    );
};

export default OurPromise;
