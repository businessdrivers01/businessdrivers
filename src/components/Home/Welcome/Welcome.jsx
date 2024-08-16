import React from 'react';
import { motion } from 'framer-motion';

function Welcome() {

    const welcomeContent = [
        {
            title: 'Welcome to Business Drivers 01: Your Partner in Growth and Innovation',
            description: "At Business Drivers 01, we are more than just a digital marketing agency; we are a catalyst for your business's success. With a unique blend of cutting-edge marketing strategies and comprehensive business development services, we transform potential into performance and vision into reality. Our team of experts is dedicated to driving your business forward in the dynamic digital landscape."
        },
        {
            title: 'Our Mission',
            description: "Our mission is to empower businesses with transformative digital marketing and innovative business development strategies, enabling them to lead their industries with confidence and agility. We are committed to delivering measurable results and fostering long-term partnerships built on trust and success."
        },
        {
            title: 'Why Choose Us?',
            description: "Comprehensive Solutions: From digital marketing to business growth strategies, we offer a full spectrum of services tailored to meet your unique needs.\nExpert Team: Our team consists of seasoned professionals with extensive experience and a passion for innovation.\nClient-Centric Approach: We prioritize understanding your business and crafting solutions that align with your goals."
        }
    ];

    return (
        <div className='welcome-container my-12 px-6 md:px-12 lg:px-20'>
            {
                welcomeContent.map((content, index) => (
                    <motion.div 
                        key={index} 
                        className='cursor-pointer welcome-section mb-12 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-extrabold text-orange mb-4'>{content.title}</h2>
                        <p className='text-lg md:text-xl text-skyBlue  font-semibold leading-relaxed whitespace-pre-line'>
                            {content.description}
                        </p>
                    </motion.div>
                ))
            }
        </div>
    );
}

export default Welcome;
