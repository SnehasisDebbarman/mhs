import React from 'react';

import useMobileView from '../hooks/useMobileView';
import shipra from "../assets/testimonial/shipra.png"
import meena from "../assets/testimonial/meena.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "../components/ui/carousel"
import { cn } from '../lib/utils';
import StarRating from './ui/star-rating';



interface Testimonial {
    name: string;
    role: string;
    testimonial: string;
    imageSrc: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Shipra Narang',
        role: 'Parent of Class 1 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: shipra, // Replace with actual image path
        rating: 4,
    },
    {
        name: 'Meena Sharma',
        role: 'Parent of Class 2 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: meena, // Replace with actual image path
        rating: 5,
    },
    {
        name: 'Sunita Gupta',
        role: 'Parent of Class 4 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: shipra, // Replace with actual image path
        rating: 4,
    },
];

const ParentTestimonials: React.FC = () => {
    const isMobile = useMobileView()
    return (
        <div className="container mx-auto p-4 max-w-6xl py-20 sm:pb-32  flex flex-col items-center   overflow-hidden">
            <h1 className="text-6xl spectral-regular sm:text-3xl font-bold text-center mb-20 text-black">What Parents Says</h1>

            <div className=' mx-10 sm:w-full flex justify-center rounded-lg'>
                <Carousel className='mx-10 '>
                    <CarouselContent className='p-5 gap-2'>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className={cn("bg-[#FEF0FE] p-10 rounded-xl ", (isMobile ? "basis-3/5" : "basis-1/3"))}
                            >
                                <div className='flex gap-5 '>
                                    <img
                                        src={testimonial.imageSrc}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mb-4 p-1 border border-dashed border-[#FCB6FC]"
                                    />
                                    <div className='flex flex-col gap-0'>
                                        <h2 className=" font-semibold  text-black mb-1">{testimonial.name}</h2>
                                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                </div>


                                <p className="text-gray-800 text-xs pt-5">{testimonial.testimonial}</p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselDots className='-bottom-8' dotButtonActiveClassName='bg-[#B508B5] flex justify-center' dotButtonInactiveClassName='bg-[#B508B5]' /> */}
                    {/* <CarouselPrevious className='mt-10 mr-2 bg-[#B508B5]' /> */}
                    {/* <CarouselNext className='mt-10  bg-[#B508B5]' /> */}
                </Carousel>


            </div>

            {/* } */}



        </div>
    );
};

export default ParentTestimonials;
