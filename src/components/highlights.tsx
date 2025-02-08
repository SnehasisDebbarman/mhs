import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import highlight_bg from "../assets/highlight_bg.png";
import useMobileView from "../hooks/useMobileView";

const Example = () => {
    return (
        <div className="bg-[#7B057B]" >

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

    const x = useTransform(scrollYProgress, [0, 1], ["70%", "-20%"]);
    const mobileX = useTransform(scrollYProgress, [0, 1], ["10%", "-200%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] sm:h-[350vh] mx-auto   ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-center bg-cover" style={{
                backgroundImage: `url(${highlight_bg})`
            }}>
                <div className="max-w-6xl px-5 sm:px-72  ">
                    <h3 className="text-xl sm:text-5xl spectral-regular pt-10 pb-6">Unlocking Your Child’s Full Potential at MHS Junior School with MIT</h3>
                    <p className="text-[12px] sm:text-sm">We pioneer the MIT Model in Sikar, blending innovation with tradition to foster a dynamic learning environment that nurtures each child's unique potential through exceptional teaching. At MHS, students discover their passions and what inspires them, laying the foundation for success in school, work, and life. Our curriculum integrates diverse intelligences—linguistic, musical, spatial, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic, and existential—to create a holistic and engaging learning experience.</p>
                    <div className="my-8 rounded-full text-[#7B057B] bg-white p-2 px-5 float-left max-w-max">key highlights</div>
                </div>

                <motion.div style={{ x: isMobile ? mobileX : x }} className="flex gap-4 pb-12">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative  sm:h-[150px] min-w-[100px] sm:min-w-[100px] overflow-hidden bg-neutral-200"
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

export default Example;

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
