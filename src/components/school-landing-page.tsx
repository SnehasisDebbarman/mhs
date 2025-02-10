import { motion } from 'motion/react';
import mhs_logo from "../assets/mhs_logo.png"
import first_slide from "../assets/landing-page/first-slide.png"
import second_slide from "../assets/landing-page/second-slide.png"
import invert_comma from "../assets/invert-comma.png"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};
const Header = () => {
    return (<motion.header
        className="absolute z-20  w-[100vw] px-5  py-4 flex justify-between items-center "
        variants={containerVariants}
    >
        <motion.div
            className="flex items-center"
            variants={fadeUpVariants}
        >
            <img src={mhs_logo} alt="School Logo" className="w-28" />
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
            >
                Apply Now
            </motion.button>
        </motion.div>
    </motion.header>)
}
const Quote = () => {
    return (<motion.div
        className="bg-[#030817] text-white py-24"
        variants={fadeUpVariants}
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.div
            className="max-w-4xl mx-auto px-6 text-center"
            variants={containerVariants}
        >
            <motion.div
                className="flex justify-center mb-6"
                variants={fadeUpVariants}
                // whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    className="size-20"
                    src={invert_comma}
                >
                </img>
            </motion.div>
            <motion.p
                className="text-4xl font-light leading-relaxed spectral-regular "
                variants={fadeUpVariants}
                whileInView="visible"
                viewport={{ once: true }}
            >
                A family of leading independent day school based in
                Sikar City offering an exceptional education for boys
                and girls aged 3 to 18
            </motion.p>
        </motion.div>
    </motion.div>)
}

const LandingPageCarousel = () => {
    return (
        <div className='relative  bg-[#7B057B]'>
            <Header />
            <Carousel >
                <CarouselContent className=''>

                    <CarouselItem className="bg-[#7B057B] pt-16">

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
                                    {/* Image Container */}
                                    <motion.div
                                        className="mx-auto max-w-6xl px-6 py-8 min-h-screen"
                                        variants={containerVariants}
                                    >
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden mb-12 "
                                            variants={fadeUpVariants}
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.img
                                                src={first_slide}
                                                alt="Modern school building"
                                                className="w-full sm:h-[55vh] object-cover rounded-2xl"
                                                variants={fadeUpVariants}
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 1.2 }}
                                            />
                                            <motion.button
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7B057B] rounded-full p-4"
                                                variants={fadeUpVariants}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg
                                                    className="w-8 h-8 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </motion.button>
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
                                                    className="block spectral-regular "
                                                >
                                                    The First
                                                </motion.span>
                                                <motion.span
                                                    variants={fadeUpVariants}
                                                    className="spectral-regular"
                                                >
                                                    MIT Model School in {" "}
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


                    <CarouselItem
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), black), url(${second_slide})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
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
                                        className="mx-auto max-w-6xl px-6 py-8 min-h-screen"
                                        variants={containerVariants}
                                    >
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden mb-12 opacity-0 "
                                            variants={fadeUpVariants}
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {/* <motion.img
                                        src={first_slide}
                                        alt="Modern school building "
                                        className="w-full sm:h-[450px] object-cover rounded-2xl "
                                        variants={fadeUpVariants}
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.2 }}
                                    /> */}
                                            <div className='sm:h-[55vh]'></div>

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
                                                    className="block spectral-regular "
                                                >
                                                    The First
                                                </motion.span>
                                                <motion.span
                                                    variants={fadeUpVariants}
                                                    className="spectral-regular"
                                                >
                                                    MIT Model School in {" "}
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
                {/* <CarouselPrevious className='absolute bg-[#B508B5]' /> */}
                {/* <CarouselNext className='absolute  bg-[#B508B5]' /> */}
            </Carousel >
        </div>
    )
}

const SchoolLandingPage = () => {
    return (
        <div>



            {/* Hero Section */}


            {/* Quote Section */}
            <LandingPageCarousel />

            <Quote />

        </div >
    );
};

export default SchoolLandingPage;
