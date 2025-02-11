import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import curriculum_bg from "../assets/curriculum_bg.jpeg";
import bodily from "../assets/curriculum_logo/bodily.png";
import interpersonal from "../assets/curriculum_logo/interpersonal.png";
import language from "../assets/curriculum_logo/Language.png";
import logic from "../assets/curriculum_logo/logic.png";
import music from "../assets/curriculum_logo/music.png";
import nature from "../assets/curriculum_logo/nature.png";
import visual from "../assets/curriculum_logo/visual.png";
import life from "../assets/curriculum_logo/life.png";
import useMobileView from "../hooks/useMobileView";
import curriculum_bg from "../assets/curriculum/curriculum.png";

const Curriculum = () => {
    return (
        <div className="">

            <HorizontalScrollCarousel />

        </div>
    );
};

type Category = {
    category: string;
    description: string;
};

const categories: Category[] = [
    {
        category: "Academic Rigor",
        description: "Emphasis on English, Mathematics, and Science.",
    },
    {
        category: "Holistic Development",
        description: "Creative, linguistic, and interpersonal skills.",
    },
    {
        category: "MIT Model",
        description: "How the Multiple Intelligences Theory is implemented.",
    },
];


const HorizontalScrollCarousel = () => {
    const isMobile = useMobileView();
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);
    const mobileX = useTransform(scrollYProgress, [0, 1], ["20%", "-130%"]);

    return (
        <section ref={targetRef} className="relative h-[350vh] mx-auto pt-10  sm:pt-46 text-black ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-cover bg-center px-8  " style={{ backgroundImage: `url(${curriculum_bg})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black/90 opacity-100 z-10"></div>
                <div className="max-w-6xl mx-auto h-screen flex  flex-col z-20 pb-20 sm:pb-32">
                    <div className="flex flex-col sm:flex-row justify-between pt-10 sm:pt-40">
                        <div>
                            <p className="text-[#F97BF9] sm:mb-3  spectral-regular text-lg sm:text-2xl">Curriculum</p>
                            <div className="w-[240px] text-3xl sm:text-5xl spectral-regular pt-5 pb-6 sm:pb-6 text-white md:w-3/5">A Curriculum Designed for
                                Every Child’s Success</div>
                        </div>
                        <div className="flex flex-col  sm:flex-row   ">
                            <div className="flex flex-col sm:flex-row gap-4">

                                {
                                    categories.map((category, i) => <div className={(i === 0 ? "" : "border-l border-purple-300 ") + "px-4 sm:h-[120px] " + (isMobile && "border-l border-purple-300 ")}>
                                        <h3 className="text-sm sm:text-lg font-semibold sm:pb-4 spectral-regular text-white max-w-min">{category.category}</h3>
                                        <p className="text-white text-[10px] sm:text-[12px]">{category.description}</p>

                                    </div>)

                                }

                            </div>




                        </div>
                    </div>

                    <motion.div style={{ x: isMobile ? mobileX : x }} className="flex gap-4 mt-20 sm:mt-10 ">
                        {cards.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[150px] min-w-[200px] overflow-hidden bg-neutral-200 p-5 rounded-lg"
        >
            <div
                style={{
                    // backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <img src={card.url} alt={card.title} className=" inset-0 z-0 object-cover p-3 rounded-full mb-2  bg-[#B508B5]" />

            <p className="text-xl  text-black spectral-light">
                {card.title}
            </p>

        </div>
    );
};

export default Curriculum;

type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: language,
        title: "Language",
        id: 1,
    },
    {
        url: logic,
        title: "Logic & Math",
        id: 2,
    },
    {
        url: interpersonal,
        title: "Interpersonal Skills",
        id: 3,
    },
    {
        url: music,
        title: "Music",
        id: 4,
    },
    {
        url: bodily,
        title: "Bodily-Kinesthetic",
        id: 5,
    },
    {
        url: nature,
        title: "Nature",
        id: 6,
    },
    {
        url: visual,
        title: "Visual Spatial Skills",
        id: 7,
    },
    {
        url: life,
        title: "Life Skills",
        id: 8,
    },
];
