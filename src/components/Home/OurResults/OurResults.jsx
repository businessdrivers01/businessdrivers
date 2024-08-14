import React from 'react';
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function OurResults() {
    const cardData = [
        { id: 1, count: 25000, heading: 'Leads Generated', icon: <PiUsersThreeFill /> },
        { id: 2, count: 180, heading: 'Happy Clients', icon: <AiFillLike /> },
        { id: 3, count: 100, heading: 'Social Media Strategies', icon: <FaCalendarCheck /> },
        { id: 4, count: 10000, heading: 'Keywords Rank', icon: <FaChartBar /> },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.3, // Trigger when 30% of the component is in view
    });

    return (
        <div className='mt-12 md:mt-16 shadow-lg pb-8'>
            <h4 className='text-4xl md:text-5xl font-bold text-orange text-center'>
                <span className='text-skyBlue'>OUR</span> RESULTS
            </h4>

            <p className='text-md md:text-xl text-center text-orange font-bold mt-4'>
                Here is why you should partner with <span className='text-skyBlue'>Business Drivers</span> digital marketing agency for your business growth.
            </p>

            {/* RESULTS CARD */}
            <div className="flex flex-col md:flex-row justify-evenly my-12">
                {cardData.map(card => (
                    <div
                        key={card.id}
                        className="my-2 md:my-0 flex flex-col justify-center items-center border-2 border-skyBlue rounded-lg w-[80%] mx-auto md:mx-0 sm:w-1/2 lg:w-[18%] py-4"
                        ref={ref}
                    >
                        <div className="icon text-skyBlue text-5xl">{card.icon}</div>
                        <p className="mt-4 stats-count text-2xl font-bold text-skyBlue">
                            {inView ? (
                                <CountUp suffix='+' start={0} end={card.count} duration={2} separator="," />
                            ) : (
                                '0'
                            )}
                        </p>
                        <div className="heading text-lg text-orange font-bold">
                            {card.heading}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurResults;
