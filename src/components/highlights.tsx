import { motion, useTransform, useScroll, useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";
// import highlight_bg from "../assets/highlight_bg.png";
import useMobileView from "../hooks/useMobileView";

import first from "../assets/highlights/first.svg"
import qoute_left from "../assets/highlights/quote_left.svg"
import quote_right from "../assets/highlights/quote_right.svg"
import start from "../assets/highlights/start.svg"

type CardType = {
    url: string;
    title: string;
    description: string | React.JSX.Element;
    id: number;
    width: number,
    height: number,
    aspect?: number
};

const cards: CardType[] = [
    {
        url: first,
        title: "Title 1",
        description: <p>Sikar's School Focused on the <strong> MIT Model</strong></p>,
        id: 1,
        width: 250,
        height: 500,
        aspect: 9 / 10,
    },
    {
        url: qoute_left,
        title: "Title 2",
        description: <p>An Outstanding School in the heart of Sikar, offering an exceptional <strong>education for boys and girls aged 2 to 18</strong> </p>,
        id: 2,
        width: 260,
        height: 350,
        aspect: 8 / 10,
    },
    {
        url: start,
        title: "Title 3",
        description: <p> <strong>Our aims</strong> to ensure each and every child finds their spark, lighting the fire to fuel a lifetime's achievement</p>,
        id: 3,
        width: 450,
        height: 280,
        aspect: 8 / 4
    },
    {
        url: qoute_left,
        title: "Title 4",
        description: <p>A Curriculum <strong>Designed for Every Child's Success</strong> for a fast-changing world</p>,
        id: 4,
        width: 280,
        height: 300,
        aspect: 11 / 10
    },
    {
        url: start,
        title: "Title 5",
        description: <p><strong>Guided by industry experts and IIT/IIM alumni</strong>, we empower students to excel academically and develop key life skills</p>,
        id: 5,
        width: 300,
        height: 360,
        aspect: 1 / 1
    },
    {
        url: quote_right,
        title: "Title 6",
        description: <p><strong>Join us</strong> in this exciting journey of discovery and growth of child</p>,
        id: 6,
        width: 350,
        height: 280,
        aspect: 6 / 4
    },
];

const Highlights = () => {
    return (
        <div className="">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const [scope, animate] = useAnimate();
    const isMobile = useMobileView();
    const { scrollYProgress } = useScroll({
        target: scope,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["15%", "-35%"]);
    const mobileX = useTransform(scrollYProgress, [0, 1], ["10%", "-220%"]);

    const isInView = useInView(scope, { once: false, amount: 0.5 });

    useEffect(() => {
        async function animateBackground() {
            // Animate to opacity 0 initially
            // await animate(scope.current, { opacity: 0.8 }, { duration: 0 });

            if (isInView) {
                // Fade in when in view
                // await animate(scope.current, { opacity: 1 }, { duration: 2 });
            } else {
                // Fade out when out of view
                // await animate(scope.current, { opacity: 0.8 }, { duration: 1 });
            }
        }
        animateBackground();
    }, [isInView, animate, scope]);

    return (
        <section ref={scope} className="relative h-[400vh] sm:h-[350vh] mx-auto bg-[#7B057B]">
            <div className="max-w-6xl px-5 sm:px-52 pt-20 sm:pt-40">
                <h3 className="text-xl text-balance sm:text-5xl spectral-regular pt-5 pb-6 text-white">Unlocking Your Child's Full Potential at MHS Junior School with MIT</h3>
            </div>
            <div className="sticky top-0 flex flex-col h-screen overflow-hidden bg-center bg-cover " style={{
                // backgroundImage: `url(${highlight_bg})`
            }}>
                <div className="max-w-6xl px-5 sm:px-52">
                    <p className="text-[12px] text-balance sm:text-sm text-white">We pioneer the MIT Model in Sikar, blending innovation with tradition to foster a dynamic learning environment that nurtures each child's unique potential through exceptional teaching. At MHS, students discover their passions and what inspires them, laying the foundation for success in school, work, and life. Our curriculum integrates diverse intelligences—linguistic, musical, spatial, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic, and existential—to create a holistic and engaging learning experience.</p>
                    <div className=" cursor-pointer my-8 rounded-full text-[#7B057B] bg-white p-3 px-6 float-left max-w-max font-semibold text-sm hover:scale-105 transition-all duration-500">key highlights</div>
                </div>
                <motion.div style={{ x: isMobile ? mobileX : x }} className="flex gap-4 w-[150vw]">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    const isMobile = useMobileView();
    return (
        <div
            key={card.id}
            className="rounded-lg"
            style={isMobile ? {
                width: "100%"
            } : {
                width: card.width,
                height: card.height,
            }}
        >
            <div style={
                isMobile ? {
                    width: `${(card.width / 100) * 10}vh`,
                } : {
                    width: "100%",
                    aspectRatio: card.aspect ?? "auto"
                }
            } className="bg-white p-7 sm:p-10 rounded-lg w-[80vw] sm:w-full">
                <img
                    src={card.url}
                    alt={card.title}
                    className="w-[80px] aspect-square object-contain mb-2"
                />
                <div className="grid place-content-center">
                    <p className="text-[16px] text-gray-700">{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
