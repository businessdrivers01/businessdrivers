import React from 'react'
import { FaBullseye, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../utils';

function WhyUs() {

    const businessDriversBenefits = [
        {
            title: 'OUR DISTINCTIVE APPROACH',
            description: "At Business Drivers 01, we pride ourselves on our unique approach to business growth. We combine digital expertise with strategic business insights, offering solutions that are not only creative but also grounded in data and analytics. Our commitment to innovation ensures that we are always exploring new technologies and methodologies to enhance our offerings.",
            icon: <FaBullseye />
        },
        {
            title: 'INNOVATION AT THE CORE',
            description: 'We embrace a culture of innovation, constantly exploring new technologies and methodologies to enhance our offerings. Our solutions are not only creative but also rooted in data and analytics, ensuring precision and effectiveness.',
            icon: <FaRocket />
        },
        {
            title: 'CLIENT-CENTRIC PHILOSOPHY',
            description: 'Your success is our mission. We prioritize understanding your unique challenges and aspirations, allowing us to deliver solutions that are perfectly aligned with your vision. Our collaborative approach ensures that we work as an extension of your team, providing support and guidance at every step.',
            icon: <FaLightbulb />
        },
        {
            title: 'PROVEN TRACK RECORD',
            description: 'Our success is measured by the success of our clients. We have helped numerous businesses achieve significant growth and industry leadership through our innovative strategies and client-centric approach.',
            icon: <FaChartLine />
        },
    ];

    return (
        <div>
            <h4
                className='md:px-0 px-4 text-3xl md:text-4xl font-bold text-center text-orange my-8'
            >
                HOW ARE WE
                <span className='text-skyBlue'> DIFFERENT?</span>
            </h4>
            {
                businessDriversBenefits.map((benefit, index) => (
                    <div key={index} className='flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-8 p-4'>
                        <div className='text-skyBlue text-4xl md:mb-16'>
                            {benefit.icon}
                        </div>
                        <div className='md:w-2/3'>
                            <h4 className='text-xl md:text-2xl font-bold text-skyBlue'>{benefit.title}</h4>
                            <p className='text-base font-semibold md:text-lg text-orange'>{benefit.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default WhyUs;
