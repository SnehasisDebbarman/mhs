import React, { useState } from 'react';
import { motion } from 'framer-motion';
import our_promise from "../assets/our-promise/our-promise.png";
import ContactForm from './ui/contact-form';

// Define the component
const OurPromise: React.FC = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = React.useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    React.useEffect(() => {
        // Check if the ref is available and update the state
        if (ref.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            setIsInView(true);
                        } else {
                            setIsInView(false);
                        }
                    }
                },
                {
                    root: null, // Use the viewport as the root
                    rootMargin: '0px',
                    threshold: 0.2, // Trigger when 20% of the element is visible
                }
            );

            observer.observe(ref.current);

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current); // Clean up observer
                }
            };
        }
    }, []);

    return (
        <div
            ref={ref}
            className=" flex flex-col md:flex-row items-center justify-center p-8 sm:py-20 max-w-6xl mx-auto rounded-lg relative"
        >
            <div className="md:w-1/2 p-4 flex flex-col justify-center ">



                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="spectral-medium text-[#B508B5] mb-4"
                >
                    Our Offer
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-5xl font-bold text-gray-950 mb-4 spectral-medium "
                >
                    Our Promise to Our Students & Families
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-lg sm:text-sm text-gray-700 mb-6"
                >
                    An innovative curriculum that sparks academic curiosity and fuels a passion for learning. Our classrooms are spaces where challenging questions are embraced, deepening understanding and critical thinking. Every student is valued and welcomed for who they are, creating a supportive environment that nurtures individuality.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="text-lg sm:text-sm text-gray-700 mb-6"
                >
                    By recognizing and fostering each student's unique potential, we empower them to grow, thrive, and succeed. This is Matrix High School. This is where you belong.
                </motion.p>
                <motion.div
                    onClick={openForm}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className=" cursor-pointer max-w-max bg-[#B508B5] hover:scale-105 transition-all duration-500 text-white font-semibold py-3 px-6 rounded-full"
                >
                    Book a Visit
                </motion.div>
            </div>
            <div className="md:w-2/3 flex items-center justify-end h-1/3 p-4">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0.8,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }} // Reverse of enter
                    transition={{ duration: 0.7, delay: 1.2 }}
                    src={our_promise}
                    alt="Student"
                    className="sm:w-3/4 aspect-[3/4] object-cover"
                />
            </div>
            {isFormOpen && <ContactForm onClose={closeForm} />}
        </div>
    );
};

export default OurPromise;
