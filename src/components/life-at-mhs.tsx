import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import useMobileView from "../hooks/useMobileView";
import academic from "../assets/life-at-mhs/academic.png";
import extra_curricular from "../assets/life-at-mhs/extra-curricular.png";
import wellbeing from "../assets/life-at-mhs/wellbeing.png";
import community from "../assets/life-at-mhs/community.png";

const LifeAtMHS = () => {
    return (
        <div className="#FEFAF0">

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMobileView();
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["30%", "-70%"]);
    const mobileX = useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[350vh] mx-auto py-18 text-black bg-[#FEFAF0] ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-cover bg-center px-8  " >
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black opacity-100 z-10"></div> */}
                <div className="max-w-5xl mx-auto h-screen flex flex-col pt-2 sm:pt-20 z-20">
                    <p className="text-[#7B057B] pt-4 sm:pt-10 spectral-medium">Life At MHS</p>
                    <h3 className="text-4xl sm:text-5xl spectral-regular text-black py-2 sm:py-6  md:w-1/3">What's
                        Happening?</h3>
                    <p className="text-sm sm:text-base sm:w-3/6">Discover what makes MHS unique—an outstanding location in the heart of Sikar and an exciting place where children learn and grow through our personalized approach to teaching and learning.</p>


                    <motion.div style={{ x: isMobile ? mobileX : x }} className="absolute flex gap-4 top-50  sm:top-20">
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
        <div className="relative">
            <div className="group absolute -top-2 -left-2 h-[70vh] min-w-[300px] sm:min-w-[60vw] overflow-hidden bg-purple-400 z-10"></div>
            <div
                key={card.id}
                className="group relative h-[70vh] min-w-[300px] sm:min-w-[60vw] overflow-hidden bg-neutral-200 z-20"
            >

                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
                <div className="absolute inset-0 z-10 flex items-end  p-5 ">
                    <p className="absolute top-0 left-0 p-4 sm:p-10 text-4xl sm:text-7xl spectral-medium text-white z-30 max-w-min ">{card.header}</p>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 opacity-100 z-10"></div>
                    <div className="flex flex-col w-full z-20 border-t-[0.5px] pt-2 border-white">
                        <p className="text-lg sm:text-lg text-white font-bold ">
                            {card.title}
                        </p>
                        <p className="text-white font-medium mt-2 text-sm sm:text-[10px]">
                            {card.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default LifeAtMHS;

type CardType = {
    url: string;
    title: string;
    description?: string;
    id: number;
    header: string;
};

const cards: CardType[] = [
    {
        header: "Academic Success",
        url: academic,
        title: "Developing a lifelong love of Learnings",
        description: "We are a forward-thinking school, dedicated to academic excellence and driven by a passion for progress.",
        id: 1,
    },
    {
        header: "Extra Curricular",
        url: extra_curricular,
        title: "A happy and inspiring learning journey",
        description: "We offer a dynamic extracurricular program to inspire every child, fostering well-rounded development and helping them thrive at every age.",
        id: 2,
    },
    {
        header: "Wellbeing",
        url: wellbeing,
        title: "An atmosphere of warmth and support",
        description: "At MHS, we believe learning extends beyond the classroom. Our dedicated teachers craft personalized lessons that inspire and engage children through real-life experiences.",
        id: 3,
    },
    {
        header: "Our Community",
        url: community,
        title: "The Heathside family",
        description: "We take pride in our strong community, where pupils, parents, and staff collaborate to create a nurturing, inclusive environment. Our active Parent-Teacher Association ( PTA ) strengthens this bond, engaging families in enriching activities that enhance the school experience",
        id: 4,
    },
];
