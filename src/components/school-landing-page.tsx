import { motion } from 'motion/react';
import mhs_logo from "../assets/mhs_logo.png"
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

const SchoolLandingPage = () => {
    return (
        <motion.div
            className="min-h-screen bg-[#7B057B]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <motion.header
                className="bg-[#7B057B] px-5 md:px-20 py-4 flex justify-between items-center"
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
            </motion.header>

            {/* Main Content */}
            <motion.main variants={containerVariants}>
                {/* Hero Section */}
                <motion.div
                    className="relative bg-[#7B057B] text-white"
                    variants={fadeUpVariants}
                >
                    {/* Image Container */}
                    <motion.div
                        className="mx-auto max-w-6xl px-6 py-8"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="relative rounded-2xl overflow-hidden mb-12"
                            variants={fadeUpVariants}
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.img
                                src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Modern school building"
                                className="w-full h-[400px] object-cover rounded-2xl"
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
                            className="space-y-6"
                            variants={containerVariants}
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h1
                                className="text-5xl font-serif  border-l-2 border-[#F00AF0] pl-4"
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

                {/* Quote Section */}
                <motion.div
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
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.8 }}
                        >
                            <svg
                                className="w-12 h-12"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
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
                </motion.div>
            </motion.main>
        </motion.div>
    );
};

export default SchoolLandingPage;
