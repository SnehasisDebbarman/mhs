import React from 'react';

import useMobileView from '../hooks/useMobileView';
import shipra from "../assets/testimonial/shipra.png"
import meena from "../assets/testimonial/meena.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
} from "../components/ui/carousel"
import { cn } from '../lib/utils';



interface Testimonial {
    name: string;
    role: string;
    testimonial: string;
    imageSrc: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Shipra Narang',
        role: 'Parent of Class 1 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: shipra, // Replace with actual image path
    },
    {
        name: 'Meena Sharma',
        role: 'Parent of Class 2 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: meena, // Replace with actual image path
    },
    {
        name: 'Sunita Gupta',
        role: 'Parent of Class 4 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: shipra, // Replace with actual image path
    },
];

const ParentTestimonials: React.FC = () => {
    const isMobile = useMobileView()
    return (
        <div className="container mx-auto p-4 max-w-6xl pb-40 flex flex-col items-center">
            <h1 className="text-6xl spectral-regular sm:text-3xl font-bold text-center mb-8 text-black">What Parents Says</h1>
            {/* {
                !isMobile ?

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-[#FEF0FE] p-6 rounded-lg shadow-sm flex flex-col items-center"
                            >
                                <div className='flex gap-5'>
                                    <img
                                        src={testimonial.imageSrc}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mb-4"
                                    />
                                    <div>
                                        <h2 className=" font-semibold mb-1 text-black">{testimonial.name}</h2>
                                        <p className="text-gray-600 mb-2 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>


                                <p className="text-gray-800 text-sm">{testimonial.testimonial}</p>
                            </div>
                        ))}
                    </div>
                    : */}
            <div className='w-4/5 mx-10 sm:w-full flex justify-center rounded-lg'>
                <Carousel className='mx-10'>
                    <CarouselContent >
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className={cn("bg-[#FEF0FE] px-5 py-5 rounded-xl w-4/5 ml-4 ", (isMobile ? "basis-2/3" : "basis-1/3"))}
                            >
                                <div className='flex gap-5'>
                                    <img
                                        src={testimonial.imageSrc}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mb-4"
                                    />
                                    <div>
                                        <h2 className=" font-semibold mb-1 text-black">{testimonial.name}</h2>
                                        <p className="text-gray-600 mb-2 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>


                                <p className="text-gray-800 text-sm">{testimonial.testimonial}</p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselDots className='-bottom-8' dotButtonActiveClassName='bg-[#B508B5] flex justify-center' dotButtonInactiveClassName='bg-[#B508B5]' />
                    {/* <CarouselPrevious className='mt-10 mr-2 bg-[#B508B5]' /> */}
                    {/* <CarouselNext className='mt-10  bg-[#B508B5]' /> */}
                </Carousel>


            </div>

            {/* } */}



        </div>
    );
};

export default ParentTestimonials;
