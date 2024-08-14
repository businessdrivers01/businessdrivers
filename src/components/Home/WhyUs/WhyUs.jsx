import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../../utils';
function WhyUs() {

    const businessDriversBenefits = [
        {
            title: 'PROVEN TRACK RECORD',
            description: "We've helped businesses grow and thrive online with a variety of digital marketing strategies in the past.",
        },
        {
            title: 'EXPERIENCED TEAM',
            description: 'Our team is made up of experienced professionals who are dedicated to staying up-to-date on the latest trends and techniques in the industry.',
        },
        {
            title: 'WIDE RANGE OF SERVICES',
            description: 'We offer a wide range of digital marketing services, including SEO, PPC, social media marketing, and more, to help businesses succeed in the digital world.',
        },
        {
            title: 'CUSTOMIZED SOLUTIONS',
            description: 'We work closely with our clients to understand their unique needs and goals, and we offer customized solutions to help them succeed online.',
        },
        {
            title: 'EXCEPTIONAL CUSTOMER SERVICE',
            description: 'We are committed to providing the highest level of service to our clients, and we strive to build long-term relationships with them.',
        },
    ];


    return (
        <div>
            <h4
                className='md:px-0 px-4 text-3xl md:text-4xl font-bold text-skyBlue text-center'
            >
                WHY BUSINESS DRIVERS
                <span className='text-orange'> DIGITAL MARKETING AGENCY ?</span>
            </h4>
            {
                businessDriversBenefits.map((benefit, index) => (
                    <div key={index} className='flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-8 p-4'>

                        <div className='md:w-2/3'>
                            <h4 className='text-xl md:text-2xl font-bold text-skyBlue'>{benefit.title}</h4>
                            <p className='text-base font-semibold md:text-lg text-orange'>{benefit.description}</p>
                        </div>
                    </div>
                ))
            }

            <div className="boost-btn-container flex justify-center">
                <NavLink to="/contact">
                    <Button
                        children="Let's Boost Your Business"
                        className='font-bold my-4  text-white py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
                    />
                </NavLink>

            </div>
        </div>
    )
}

export default WhyUs