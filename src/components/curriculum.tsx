import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import curriculum_bg from "../assets/curriculum_bg.jpeg";

const Curriculum = () => {
    return (
        <div className="">

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["90%", "20%"]);

    return (
        <section ref={targetRef} className="relative h-[350vh] mx-auto   py-32 text-black ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-cover bg-center px-8  " style={{ backgroundImage: `url(${curriculum_bg})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black opacity-100 z-10"></div>
                <div className="max-w-6xl mx-auto h-screen flex  flex-col z-20">
                    <p className="text-[#7B057B] pt-10 ">Curriculum</p>
                    <h3 className="text-5xl spectral-regular  pt-5 pb-6 text-white md:w-1/3">A Curriculum Designed for
                        Every Child’s Success</h3>
                    <div className="my-8 rounded-full text-[#7B057B] bg-white p-2 px-5 float-left max-w-max">key highlights</div>
                    <motion.div style={{ x }} className="flex gap-4">
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
            className="group relative h-[150px] w-[100px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className=" inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8  font-black uppercase text-white backdrop-blur-lg">
                    {card.title} hellp
                </p>
            </div>
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
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
    },
];
