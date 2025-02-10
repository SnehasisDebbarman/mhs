import React from 'react';

import useMobileView from '../hooks/useMobileView';
import shipra from "../assets/testimonial/shipra.png"
import meena from "../assets/testimonial/meena.png"


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
        <div className="container mx-auto p-4 max-w-6xl pb-40">
            <h1 className="text-2xl spectral-regular sm:text-3xl font-bold text-center mb-8 text-black">What Parents Says</h1>
            {
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
                    :
                    <></>

            }



        </div>
    );
};

export default ParentTestimonials;
