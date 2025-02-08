import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const LifeAtMHS = () => {
    return (
        <div className="#FEFAF0">

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[350vh] mx-auto py-18 text-black ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-cover bg-center px-8  " >
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black opacity-100 z-10"></div> */}
                <div className="max-w-6xl mx-auto h-screen flex flex-col pt-20 z-20">
                    <p className="text-[#7B057B] pt-10 ">Life At MHS</p>
                    <h3 className="text-5xl spectral-regular text-black pt-5 pb-6  md:w-1/3">What's
                        Happening?</h3>
                    <p className="md:w-1/3">Discover what makes MHS unique—an outstanding location in the heart of Sikar and an exciting place where children learn and grow through our personalized approach to teaching and learning.</p>
                    <div className="my-8 rounded-full text-[#7B057B] bg-white p-2 px-5 float-left max-w-max">key highlights</div>

                    <motion.div style={{ x }} className="absolute flex gap-4">
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
            <div className="group absolute -top-2 -left-2 h-[50vh] min-w-[400px] overflow-hidden bg-purple-400 z-10"></div>
            <div
                key={card.id}
                className="group relative h-[50vh] min-w-[400px] overflow-hidden bg-neutral-200 z-20"
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
                    <p className="absolute top-0 left-0 p-4 text-4xl spectral-medium text-white z-30 ">{card.header}</p>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 opacity-100 z-10"></div>
                    <div className="flex flex-col z-20 border-t-[0.5px] pt-2 border-white">
                        <p className="text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold ">
                            {card.title}
                        </p>
                        <p className="text-white font-medium mt-2 text-[10px]">
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
        url: "https://plus.unsplash.com/premium_photo-1682974406908-66032d609d94?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Developing a lifelong love of Learnings",
        description: "We are a forward-thinking school, dedicated to academic excellence and driven by a passion for progress.",
        id: 1,
    },
    {
        header: "Extra Curricular",
        url: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "A happy and inspiring learning journey",
        description: "We offer a dynamic extracurricular program to inspire every child, fostering well-rounded development and helping them thrive at every age.",
        id: 2,
    },
    {
        header: "Wellbeing",
        url: "https://images.unsplash.com/photo-1594122230689-7f659cff55b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "An atmosphere of warmth and support",
        description: "At MHS, we believe learning extends beyond the classroom. Our dedicated teachers craft personalized lessons that inspire and engage children through real-life experiences.",
        id: 3,
    },
    {
        header: "Our Community",
        url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "The Heathside family",
        description: "We take pride in our strong community, where pupils, parents, and staff collaborate to create a nurturing, inclusive environment. Our active Parent-Teacher Association ( PTA ) strengthens this bond, engaging families in enriching activities that enhance the school experience",
        id: 4,
    },
];
