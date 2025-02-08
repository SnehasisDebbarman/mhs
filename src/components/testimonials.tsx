import React from 'react';

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
        imageSrc: 'path_to_image1.jpg', // Replace with actual image path
    },
    {
        name: 'Meena Sharma',
        role: 'Parent of Class 2 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: 'path_to_image2.jpg', // Replace with actual image path
    },
    {
        name: 'Sunita Gupta',
        role: 'Parent of Class 4 Student',
        testimonial:
            'MHS Junior School has completely transformed the way my child learns. The focus on holistic development and personalized teaching has brought out the best in them. I couldn’t be happier with their progress!',
        imageSrc: 'path_to_image3.jpg', // Replace with actual image path
    },
];

const ParentTestimonials: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-6xl pb-40">
            <h1 className="text-3xl font-bold text-center mb-8 text-black">What Parents Says</h1>
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
                                className="w-16 h-16 rounded-full mb-4"
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
        </div>
    );
};

export default ParentTestimonials;
