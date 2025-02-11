import React from "react";
import { motion, useInView } from "motion/react";
import about_us from "../assets/about-us/about-us.png";

const blocks = [
    {
        title: "",
        description: "We create an extraordinary space where the love for learning is kindled, curiosity flourishes, and creativity knows no bounds. From the moment you step through our doors, you’ll feel the vibrant energy and enthusiasm that define life at MHS. Our hallways resonate with laughter and lively discussions, fostering a supportive environment where students become courageous, resilient learners, unafraid to take risks and aim high. "
    },
    {
        title: "",
        description: "At MHS, we believe in sparking curiosity, fostering holistic education, and nurturing life skills that prepare students for a vibrant future. Our mission is to cultivate happy, resilient learners equipped to make meaningful contributions to the world. "
    },
    {
        title: "",
        description: "It’s a privilege to lead this exceptional community, and we are committed to building strong partnerships between home and school, ensuring every child’s journey is supported and celebrated. We look forward to welcoming you to MHS and partnering with you to shape a bright and promising future for your child."
    }
]

function AboutUs() {
    return (
        <div className="flex min-h-[200vh] flex-col sm:flex-row mx-auto max-w-7xl bg-white">
            {/* Left Fixed Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                layout
                className="visible w-full sm:w-1/2 relative p-4 sm:p-20 rounded">
                <img
                    src={about_us}
                    alt="Placeholder"
                    className="sticky top-10 w-full sm:h-[80vh] object-cover rounded-sm"
                />
            </motion.div>

            {/* Right Text Section */}
            <div className="w-full sm:w-1/2 relative  mb-20">
                <motion.div className="sticky top-0 pt-10 ml-5 bg-white z-40"
                >
                    <div className="text-[#B508B5] spectral-light ">About Us</div>

                    <h3 className="text-black text-2xl sm:text-4xl text-semibold spectral-light sm:w-2/3">{"Welcome to Matrix High School Igniting Possibilities"}</h3>

                </motion.div>
                {blocks.map((it, index) => (
                    <RevealBlock key={index} title={it.title} description={it.description} index={index} />
                ))}
            </div>
        </div>
    );
}

interface RevealBlockProps {
    key: number;
    title: string;
    description: string;
    index: number;
}
function RevealBlock({ description }: RevealBlockProps) {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });


    return (
        <div>


            <motion.div
                ref={ref}
                className={`left-0 w-full h-[50vh] sm:h-[80vh] text-gray-900 snap-center snap-normal snap-y  p-8 rounded-md  flex items-center justify-center text-2xl  mb-4`}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 100 : 0,
                    transition: {
                        duration: 0.5,
                        delay: isInView ? 0 : 0
                    }
                }}
                exit={{ opacity: 0 }}
            >
                <div className="flex flex-col gap-3 ">
                    {/* {
                        index === 0 && <div className="text-[#B508B5] spectral-light ">About Us</div>
                    }
                    <h3 className="text-2xl sm:text-4xl text-semibold spectral-light sm:w-2/3">{title}</h3> */}
                    <div className="text-[12px] sm:text-2xl text-gray-700 sm:pr-20 ">{description}</div>
                </div>
            </motion.div >
        </div>

    );
}

export default AboutUs;
