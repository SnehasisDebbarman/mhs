import React from "react";

interface Props {
    onClose: () => void;
}

const ContactForm: React.FC<Props> = ({ onClose }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close the modal only if the overlay is clicked
        if (e.currentTarget === e.target) {
            onClose();
        }
    };
    return (
        <div onClick={handleOverlayClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 relative sm:w-full w-[80vw] sm:max-w-3xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-300 hover:text-gray-700 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Title */}
                <h2 className="text-5xl font-semibold text-gray-800 mb-6 spectral-medium">
                    Get in Touch
                </h2>



                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            id="fullName"
                            className="appearance-none border-b  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#B508B5]"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="flex w-full gap-5 flex-col sm:flex-row">
                        <div className="flex-1">

                            <input
                                type="email"
                                id="email"
                                className="appearance-none border-b  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#B508B5]"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex-1">

                            <input
                                type="tel"
                                id="mobile"
                                className=" appearance-none border-b  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#B508B5]"
                                placeholder="Your Mobile Number"
                            />
                        </div>
                    </div>
                    <div>

                        <textarea
                            id="message"
                            rows={2}
                            className=" appearance-none border-b  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#B508B5]"
                            placeholder="Message"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-[#B508B5] hover:bg-[#B508B5]/80 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
