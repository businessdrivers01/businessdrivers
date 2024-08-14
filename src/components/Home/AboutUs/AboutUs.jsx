import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const companyValues = [
    {
        icon: <FaEye size={40} />,
        title: 'Vision',
        description: 'Our vision is to become the first choice digital marketing agency for businesses looking to expand their online presence and reach out to new customers. We strive to provide our clients with the most innovative and effective digital marketing strategies that produce measurable results. We develop strong, long-term relationships with our clients by being transparent, honest, and dedicated to their success. We envision a future in which we are recognized as industry leaders, delivering exceptional results, and driving growth for our clients.'
    },
    {
        icon: <FaBullseye size={40} />,
        title: 'Mission',
        description: 'Our mission at Business Drivers is to provide our clients with innovative and effective digital marketing solutions. Through the use of social media, email marketing, search engine optimization, and other digital channels, we hope to assist businesses of all sizes and industries in achieving their marketing and sales objectives. Our team is committed to providing exceptional customer service and staying current on industry trends and technologies. Our ultimate goal is to assist our clients in succeeding and flourishing in the digital world.'
    }
];

function AboutUs() {
    return (
        <div>

            <h6 className='text-5xl text-orange font-bold text-center my-4'>
                ABOUT <span
                    className='text-skyBlue'
                >
                    US

                </span>
            </h6>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
                {companyValues.map((value, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between items-center bg-white border-2 border-orange p-6 rounded-lg shadow-md text-center py-14 max-w-lg h-full"
                    >
                        <div className="mb-4
                    text-skyBlue
                    ">{value.icon}</div>
                        <h3 className="text-2xl text-skyBlue font-bold mb-4">{value.title}</h3>
                        <p className="text-orange text-left font-semibold mt-4">{value.description}</p>
                    </div>
                ))}
            </div>

            <div className="mx-auto my-16 w-[70%] bg-orange h-[2px]"></div>
        </div>
    );
}

export default AboutUs;
