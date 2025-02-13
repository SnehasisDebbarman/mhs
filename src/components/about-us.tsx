import React, { useEffect, useState } from "react";
import { motion, useInView, useScroll } from "motion/react";
import about_us from "../assets/about-us/about-us.png";
// import useMobileView from "../hooks/useMobileView";

const blocks = [
    {
        title: "",
        description: "We create an extraordinary space where the love for learning is kindled, curiosity flourishes, and creativity knows no bounds. From the moment you step through our doors, you'll feel the vibrant energy and enthusiasm that define life at MHS. Our hallways resonate with laughter and lively discussions, fostering a supportive environment where students become courageous, resilient learners, unafraid to take risks and aim high. "
    },
    {
        title: "",
        description: "At MHS, we believe in sparking curiosity, fostering holistic education, and nurturing life skills that prepare students for a vibrant future. Our mission is to cultivate happy, resilient learners equipped to make meaningful contributions to the world. "
    },
    {
        title: "",
        description: "It's a privilege to lead this exceptional community, and we are committed to building strong partnerships between home and school, ensuring every child's journey is supported and celebrated. We look forward to welcoming you to MHS and partnering with you to shape a bright and promising future for your child."
    }
];

function AboutUs() {
    // const isMobile = useMobileView()
    const [isNearEnd, setIsNearEnd] = useState(false);
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            // When section is 70% scrolled (30% remaining), trigger the effect
            setIsNearEnd(latest > 0.9);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    // const isInView = useInView(containerRef, { amount: 0.3 });

    return (
        <div style={{
            // backgroundColor: !isInView ? "#7B057B" : "white",
            transition: 'opacity 0.5s ease-in-out'
        }}>
            <div
                ref={containerRef}
                className={`flex min-h-[200vh] flex-col sm:flex-row mx-auto max-w-7xl transition-colors duration-700 bg-purple-600'
                }`}
                style={{
                    // opacity: isInView ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                }}
            >
                {/* Left Fixed Image Section */}
                <motion.div
                    // initial={{ width: 0 }}
                    // transition={{ duration: 1.5, }}
                    // whileInView={{ width: isMobile ? "100%" : "50%" }}
                    // exit={{ width: 0 }}
                    // layout
                    className="visible sm:w-1/2 relative p-4 sm:p-20 rounded">
                    <img
                        src={about_us}
                        alt="Placeholder"
                        className="sticky top-10 w-full sm:h-[80vh] object-cover rounded-sm"
                    />
                </motion.div>

                {/* Right Text Section */}
                <div
                    style={{
                        // marginTop: isInView ? 0 : -100,
                        // opacity: isInView ? 1 : 0,
                        transition: 'all 0.5s ease-in-out'
                    }}
                    className="w-full sm:w-1/2 relative mb-20">
                    <motion.div
                        initial={{
                            background: "#B508B5"
                        }}
                        whileInView={{
                            background: "white"
                        }}
                        exit={{
                            background: "#B508B5"
                        }}
                        className={'sticky top-0 pt-10 pl-5  z-40'}
                    >
                        <div className={`spectral-light pt-20 pb-4  transition-colors duration-700 ${isNearEnd ? 'text-white' : 'text-[#B508B5]'
                            }`}>
                            About Us
                        </div>

                        <h3 className={`text-2xl sm:text-4xl text-semibold spectral-light sm:w-2/3 transition-colors duration-700 ${isNearEnd ? 'text-white' : 'text-black'
                            }`}>
                            {"Welcome to Matrix High School Igniting Possibilities"}
                        </h3>
                    </motion.div>

                    {blocks.map((it, index) => (
                        <RevealBlock
                            key={index}
                            title={it.title}
                            description={it.description}
                            index={index}
                            isNearEnd={isNearEnd}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

interface RevealBlockProps {
    key: number;
    title: string;
    description: string;
    index: number;
    isNearEnd: boolean;
}

function RevealBlock({ description, isNearEnd }: RevealBlockProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <div>
            <motion.div
                ref={ref}
                className={`left-0 w-full h-[50vh] sm:h-[80vh] snap-center snap-normal snap-y p-8 pl-4 rounded-md flex items-center justify-center text-2xl mb-4 transition-colors duration-700 ${isNearEnd ? 'text-white' : 'text-gray-900'
                    }`}
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
                <div className="flex flex-col gap-3">
                    <div className={`text-lg sm:text-xl sm:pr-20 transition-colors duration-700 ${isNearEnd ? 'text-white' : 'text-gray-700'
                        }`}>
                        {description}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutUs;
