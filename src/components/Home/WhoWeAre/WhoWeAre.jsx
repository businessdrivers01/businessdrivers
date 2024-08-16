import React from 'react';
import { motion } from 'framer-motion';

function WhoWeAre() {

    const aboutContent = [
        {
            title: 'Who We Are?',
            description: "Business Drivers 01 is a leading agency at the intersection of digital marketing and business development. We specialize in crafting bespoke strategies that drive growth, enhance brand presence, and optimize business operations. Our multidisciplinary team brings together expertise from various industries, ensuring we deliver solutions that are both innovative and effective."
        },
        {
            title: 'Our Story',
            description: "Founded by visionary leaders with a deep understanding of the digital world and business dynamics, Business Drivers 01 has quickly established itself as a trusted partner for businesses seeking to excel. Our journey is defined by a relentless pursuit of excellence, a commitment to client success, and a passion for driving innovation."
        },
        {
            title: 'Our Values',
            description: "Innovation: We continually seek out new ideas and technologies to keep our clients ahead of the curve.\nIntegrity: We conduct business with the highest standards of honesty and transparency.\nCollaboration: We believe in building strong, lasting relationships with our clients, working together to achieve shared success."
        }
    ];

    return (
        <div className='about-container my-12 px-6 md:px-12 lg:px-20'>
            {
                aboutContent.map((content, index) => (
                    <motion.div 
                        key={index} 
                        className='about-section mb-12 p-6 bg-white'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-extrabold text-skyBlue mb-4'>{content.title}</h2>
                        <p className='text-lg md:text-xl font-semibold text-orange leading-relaxed whitespace-pre-line'>
                            {content.description}
                        </p>
                    </motion.div>
                ))
            }
        </div>
    );
}

export default WhoWeAre;
