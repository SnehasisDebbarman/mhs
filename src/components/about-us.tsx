import React from "react";
import { motion, useInView } from "framer-motion";

const blocks = [
    {
        title: "Welcome to Matrix High School Igniting Possibilities",
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
            <div className="visible w-full sm:w-1/2 relative p-4 sm:p-20 rounded">
                <motion.img
                    src="https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Placeholder"
                    className="sticky top-10 w-full h-[80vh] object-cover rounded-sm"
                />
            </div>

            {/* Right Text Section */}
            <div className="w-full sm:w-1/2 relative p-10 mb-20">
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
function RevealBlock({ title, description, index }: RevealBlockProps) {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.7 });


    return (
        <motion.div
            ref={ref}
            className={`left-0 w-full h-[50vh] sm:h-[80vh] text-gray-900 snap-center snap-normal snap-y  p-8 rounded-md  flex items-center justify-center text-2xl  mb-4`}
            initial={{ opacity: 0 }}
            animate={{
                opacity: isInView ? 1 : 0,
                transition: {
                    duration: 0.5,
                    delay: isInView ? 0 : 0
                }
            }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col gap-3 ">
                {
                    index === 0 && <div className="text-[#B508B5] spectral-light ">About Us</div>
                }
                <h3 className="text-2xl sm:text-5xl text-semibold spectral-light">{title}</h3>
                <div className="text-[12px] sm:text-[18px] text-gray-700 sm:pr-20 ">{description}</div>
            </div>
        </motion.div>
    );
}

export default AboutUs;
