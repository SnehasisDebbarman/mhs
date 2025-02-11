import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import highlight_bg from "../assets/highlight_bg.png";
import useMobileView from "../hooks/useMobileView";

import first from "../assets/highlights/first.png"
import qoute_left from "../assets/highlights/quote_left.png"
import quote_right from "../assets/highlights/quote_right.png"
import start from "../assets/highlights/start.png"

type CardType = {
    url: string;
    title: string;
    description: string | React.JSX.Element;
    id: number;
    width: number,
    height: number,
};

const cards: CardType[] = [
    {
        url: first,
        title: "Title 1",
        description: <p>Sikar’s School Focused on the <strong> MIT Model</strong></p>,
        id: 1,
        width: 280,
        height: 300,
    },
    {
        url: qoute_left,
        title: "Title 2",
        description: <p>An Outstanding School in the heart of Sikar, offering an exceptional <strong>education for boys and girls aged 2 to 18</strong> </p>,
        id: 2,
        width: 280,
        height: 350,
    },
    {
        url: start,
        title: "Title 3",
        description: <p> <strong>Our aims</strong> to ensure each and every child finds their spark, lighting the fire to fuel a lifetime’s achievement</p>,
        id: 3,
        width: 450,
        height: 280,
    },
    {
        url: qoute_left,
        title: "Title 4",
        description: <p>A Curriculum <strong>Designed for Every Child’s Success</strong> for a fast-changing world</p>,
        id: 4,
        width: 320,
        height: 300,
    },
    {
        url: start,
        title: "Title 5",
        description: <p><strong>Guided by industry experts and IIT/IIM alumni</strong>, we empower students to excel academically and develop key life skills</p>,
        id: 5,
        width: 350,
        height: 360,
    },
    {
        url: quote_right,
        title: "Title 6",
        description: <p><strong>Join us</strong> in this exciting journey of discovery and growth of child</p>,
        id: 6,
        width: 350,
        height: 280,
    },

];


const Highlights = () => {
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
    const mobileX = useTransform(scrollYProgress, [0, 1], ["10%", "-250%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] sm:h-[350vh] mx-auto   ">
            <div className="sticky top-0 flex flex-col h-screen  overflow-hidden bg-center bg-cover" style={{
                backgroundImage: `url(${highlight_bg})`
            }}>
                <div className="max-w-6xl px-5 sm:px-52  ">
                    <h3 className="text-xl sm:text-5xl spectral-regular pt-5 pb-6 text-white">Unlocking Your Child’s Full Potential at MHS Junior School with MIT</h3>
                    <p className="text-[14px] sm:text-sm text-white">We pioneer the MIT Model in Sikar, blending innovation with tradition to foster a dynamic learning environment that nurtures each child's unique potential through exceptional teaching. At MHS, students discover their passions and what inspires them, laying the foundation for success in school, work, and life. Our curriculum integrates diverse intelligences—linguistic, musical, spatial, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic, and existential—to create a holistic and engaging learning experience.</p>
                    <div className="my-8 rounded-full text-[#7B057B] bg-white p-3 px-6 float-left max-w-max font-semibold text-sm">key highlights</div>
                </div>
                <motion.div style={{ x: isMobile ? mobileX : x }} className="flex w-auto gap-4">
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
            className={`rounded-lg`}
            style={{
                width: card.width,
                height: card.height,
            }}
        >
            <div className="bg-neutral-200 p-5 rounded-lg w-full ">
                <img
                    src={card.url}
                    alt={card.title}
                    className="w-1/3  object-contain mb-2"
                />
                <div className="grid place-content-center ">
                    <p className="text-[13px] text-gray-700 font-semibold">{card.description}</p>
                </div>
            </div>
        </div>
    );
};


export default Highlights;
