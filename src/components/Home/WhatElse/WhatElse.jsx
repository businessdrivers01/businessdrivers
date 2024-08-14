import React from 'react'
import { FaArrowDown } from "react-icons/fa";

import seo from "../../../assets/svg/seo.svg"
import smm from "../../../assets/svg/smm.svg";
import ppc from "../../../assets/svg/ppc.svg";
import contentWriting from "../../../assets/svg/contentWriting.svg";
import webDev from "../../../assets/svg/webDev.svg";
import branding from "../../../assets/svg/branding.svg";
import { NavLink } from 'react-router-dom';


function WhatElse() {

    const services = [
        {
            icon: seo,
            title: "SEO (SEARCH ENGINE OPTIMIZATION)",
            description: "Experience the power of SEO in revenue growth",
            bullets: [
                "Boost your website traffic",
                "with top of search results.",
                "Get qualified traffic and increase conversions.",
                "Industry leading Tools.",
                "With SEO, you make it easier for",
                "potential customers to find you."
            ],
            linkText: "Explore SEO services to learn more >"
        },
        {
            icon: smm,
            title: "SOCIAL MEDIA MARKETING",
            description: "Over 3.6 billion people use social media worldwide.",
            bullets: [
                "Increasing brand awareness",
                "Connecting with potential customers.",
                "Increase customer retention and brand loyalty.",
                "By making and sharing interesting content, social media marketing can help your business reach and connect with a wider audience."
            ],
            linkText: "Explore SMM services to learn more >"
        },
        {
            icon: ppc,
            title: "PPC (PAY PER CLICK)",
            description: "The fastest way to boost your revenue with PPC advertising",
            bullets: [
                "Get instant results.",
                "Refine audience targeting.",
                "A powerful tool for your business growth.",
                "Effective way to reach potential customers and drive conversions."
            ],
            linkText: "Explore PPC services to learn more >"
        },
        {
            icon: contentWriting,
            title: "CONTENT WRITING & COPYWRITING",
            description: "Content writing is an important part of any digital marketing plan.",
            bullets: [
                "Increased website traffic",
                "Improve the user experience for your website.",
                "Encourage them to stay on site longer.",
                "Establish your authority in your industry and enhance your credibility."
            ],
            linkText: "Explore content writing services to learn more >"
        },
        {
            icon: webDev,
            title: "WEBSITE DEVELOPMENT & DESIGN",
            description: "A custom designed website can be a vital element for businesses looking to establish a unique online presence.",
            bullets: [
                "Establish trust with potential customers.",
                "Allows you to create a unique identity.",
                "Customized features and functionality.",
                "Explore web services to learn more >"
            ],
            linkText: "Explore web services to learn more >"
        },
        {
            icon: branding,
            title: "BRANDING & GRAPHICS",
            description: "Branding and graphics can be highly persuasive elements for businesses looking to establish a strong online presence.",
            bullets: [
                "Help your business stand out.",
                "Creating a strong visual identity.",
                "Make your business more appealing.",
                "Increasing brand awareness."
            ],
            linkText: "Explore graphics services to learn more >"
        }
    ];




    return (
        <div className='mt-12 md:mt-16 pb-8'>
            <h4
                className='text-3xl md:text-5xl font-bold text-orange text-center'
            >
                WHAT ELSE YOU CAN EXPECT
                <span className='text-skyBlue'> FROM THIS DIGITAL MARKETING AGENCY ?</span>
            </h4>

            {/* down arrow */}
            <div className="arrow-container flex justify-center text-orange mt-8">
                <FaArrowDown size={"2rem"} />
            </div>


            {/* Service Cards */}

            <div className="container mx-auto p-4 my-8">
                <div className="flex flex-wrap justify-center gap-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="pb-8 border-2 border-orange p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center bg-white w-full sm:w-1/2 lg:w-1/3"
                        >
                            <img className="w-[5rem] mb-4" src={service.icon} alt={service.title} />
                            <h3 className="text-2xl font-bold text-orange mb-2">{service.title}</h3>
                            <p className="text-skyBlue mb-4 font-semibold">{service.description}</p>
                            <ul className="font-bold text-left list-disc list-inside space-y-2 mb-4">
                                {service.bullets.map((bullet, idx) => (
                                    <li key={idx} className="text-orange">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <div className="mx-auto my-12 w-[70%] bg-orange h-[2px]"></div>

                            <NavLink to="" className="text-skyBlue font-bold text-[18px]">
                                {service.linkText}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto my-16 w-[70%] bg-orange h-[2px]"></div>
        </div>
    )
}

export default WhatElse