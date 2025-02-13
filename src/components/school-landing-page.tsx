import { motion } from "motion/react";
import mhs_logo from "../assets/mhs_logo.png";
import first_slide from "../assets/landing-page/first-slide.png";
import second_slide from "../assets/landing-page/second-slide.png";
import invert_comma from "../assets/invert-comma.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useState, useRef } from "react";
import ContactForm from "./ui/contact-form";
import videoFile from "../assets/video/landing.mp4"; // Import your video
import { Pause, Play } from "lucide-react";


const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};


const containerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};
const Header = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);


    const openForm = () => {
        setIsFormOpen(true);
    };


    const closeForm = () => {
        setIsFormOpen(false);
    };
    return (
        <motion.header
            className="absolute z-20  w-[100vw] flex justify-between items-center mx-auto "
            variants={containerVariants}
        >
            <div className="max-w-6xl w-full px-5  py-4 flex justify-between items-center mx-auto ">
                <motion.div
                    className="flex items-center"
                    variants={fadeUpVariants}
                >
                    <img src={mhs_logo} alt="School Logo" className="w-44" />
                </motion.div>
                <motion.div
                    className="flex flex-col  md:flex-row items-center gap-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="text-white font-extralight text-sm"
                        variants={fadeUpVariants}
                    >
                        Talk to Us | <span className="font-bold">1800-112-110</span>
                    </motion.div>
                    <motion.button
                        className="text-[#7B057B] bg-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openForm}
                    >
                        Apply Now
                    </motion.button>
                </motion.div>
            </div>
            {isFormOpen && <ContactForm onClose={closeForm} />}
        </motion.header>
    );
};


const Quote = () => {
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50, // Start 50px below its final position
        },
        visible: {
            opacity: 1,
            y: 0, // Animate to its original position
            transition: {
                duration: 1.5, // Adjust the duration as needed
                ease: "easeInOut", // You can experiment with different easing functions
            },
        },
    };


    return (
        <div className="bg-[#030817] text-white h-[110vh] flex justify-center text-center">
            <div className="max-w-4xl mx-auto px-6 text-center flex justify-center items-center flex-col">
                <div className="flex justify-center mb-6">
                    <motion.img
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="size-20"
                        src={invert_comma}
                        alt="Inverted Comma"
                    />
                </div>
                <motion.p
                    className="text-4xl font-light leading-relaxed spectral-regular "
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                // viewport={{ once: true }}
                >
                    A family of leading independent day school based in Sikar City offering
                    an exceptional education for boys and girls aged 3 to 18
                </motion.p>
            </div>
        </div>
    );
};


const VideoCarouselItem = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const handlePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };


    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <CarouselItem className="bg-[#7B057B] py-16">
            <motion.div
                className=" bg-[#7B057B]"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.main variants={containerVariants}>
                    <motion.div
                        className="relative bg-[#7B057B] text-white"
                        variants={fadeUpVariants}
                    >
                        {/* Video Container */}
                        <motion.div
                            className="mx-auto max-w-6xl px-6 py-8 min-h-screen flex flex-col justify-between"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="relative rounded-2xl overflow-hidden my-12 "
                                variants={fadeUpVariants}
                                whileInView="visible"
                                viewport={{ once: true }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <motion.video
                                    ref={videoRef}
                                    src={videoFile}
                                    poster={first_slide} // Use first_slide as the poster
                                    className="w-full aspect-video object-cover rounded-2xl"
                                    variants={fadeUpVariants}
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2 }}
                                    loop // Loop the video
                                    playsInline // Required for mobile devices
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                />
                                {/* Play Button */}
                                {(isHovered || !isPlaying) && (
                                    <motion.button
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7B057B] rounded-full p-4 flex justify-center items-center"
                                        variants={fadeUpVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handlePlay}
                                    >

                                        {
                                            isPlaying ? <Pause /> : <Play />
                                        }


                                    </motion.button>
                                )}
                            </motion.div>


                            {/* Text Content */}
                            <motion.div
                                className="space-y-10 sm:space-y-6"
                                variants={containerVariants}
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.h1
                                    className="text-7xl sm:text-6xl font-serif  border-l-2 border-[#F00AF0] pl-4"
                                    variants={fadeUpVariants}
                                >
                                    <motion.span
                                        variants={fadeUpVariants}
                                        className="block spectral-regular text-7xl sm:text-6xl "
                                    >
                                        The First
                                    </motion.span>
                                    <motion.span
                                        variants={fadeUpVariants}
                                        className="spectral-regular text-7xl sm:text-6xl"
                                    >
                                        MIT Model School in{" "}
                                        <motion.span
                                            className="text-[#F740F7] spectral-regular-italic"
                                            variants={fadeUpVariants}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Sikar
                                        </motion.span>
                                    </motion.span>
                                </motion.h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.main>
            </motion.div>
        </CarouselItem>
    );
};


const LandingPageCarousel = () => {
    return (
        <div className="relative  bg-[#7B057B]">
            <Header />
            <Carousel
                plugins={[
                    // Autoplay({
                    // delay: 2000,
                    // }),
                ]}
            >
                <CarouselContent className="">
                    <VideoCarouselItem />


                    <CarouselItem
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), black), url(${second_slide})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className=" bg-red-300 "
                    >
                        <motion.div
                            className=""
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            {/* Main Content */}
                            <motion.main variants={containerVariants}>
                                <motion.div
                                    className="relative  text-white"
                                    variants={fadeUpVariants}
                                >
                                    {/* Image Container */}
                                    <motion.div
                                        className="mx-auto max-w-6xl px-6 py-8 min-h-screen flex flex-col justify-between"
                                        variants={containerVariants}
                                    >
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden my-12 opacity-0 "
                                            variants={fadeUpVariants}
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                // src={first_slide}
                                                // alt="Modern school building"
                                                className="w-full aspect-video object-cover rounded-2xl "
                                                variants={fadeUpVariants}
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 1.2 }}
                                            />
                                        </motion.div>


                                        {/* Text Content */}
                                        <motion.div
                                            className="space-y-10 sm:space-y-6"
                                            variants={containerVariants}
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.h1
                                                className="text-7xl sm:text-6xl font-serif  border-l-2 border-[#F00AF0] pl-4"
                                                variants={fadeUpVariants}
                                            >
                                                <motion.span
                                                    variants={fadeUpVariants}
                                                    className="block spectral-regular text-7xl sm:text-6xl"
                                                >
                                                    The First
                                                </motion.span>
                                                <motion.span
                                                    variants={fadeUpVariants}
                                                    className="spectral-regular text-7xl sm:text-6xl"
                                                >
                                                    MIT Model School in{" "}
                                                    <motion.span
                                                        className="text-[#F740F7] spectral-regular-italic"
                                                        variants={fadeUpVariants}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        Sikar
                                                    </motion.span>
                                                </motion.span>
                                            </motion.h1>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.main>
                        </motion.div>
                    </CarouselItem>
                </CarouselContent>
                {/* <CarouselDots /> */}
                {/* <CarouselPrevious className='absolute bg-[#B508B5]' /> */}
                {/* <CarouselNext className='absolute  bg-[#B508B5]' /> */}
            </Carousel>
        </div>
    );
};


const SchoolLandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            {/* Quote Section */}
            <LandingPageCarousel />
            <Quote />
        </div>
    );
};


export default SchoolLandingPage;
