import React from 'react';
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { Button } from '../../../utils';
function Pricing() {
    const pricingPlans = [
        {
            title: 'Basic',
            price: '$600/month',
            features: [
                'Social Media Marketing',
                '4 platforms',
                'Page/channel evaluation',
                'Content creation',
                'Schedule posts',
                'Engagement with followers',
                'Reporting',
                'Action plan',
            ],
        },
        {
            title: 'Standard',
            price: '$900/month',
            features: [
                'Search Engine Optimization',
                'Social Media Advertising',
                'Social Media Marketing',
                '4 platforms',
                'Page/channel evaluation',
                'Content creation',
                'Schedule posts',
                'Engagement with followers',
                'Reporting',
                'Action plan',
            ],
        },
        {
            title: 'Premium',
            price: '$1200/month',
            features: [
                'Content writing',
                'Website maintenance',
                'Email Marketing',
                'Search Engine Optimization',
                'Social Media Advertising',
                'Social Media Marketing',
                '4 platforms',
                'Page/channel evaluation',
                'Content creation',
                'Schedule posts',
                'Engagement with followers',
                'Reporting',
                'Action plan',
            ],
        },
    ];

    return (
        <div className='my-8 md:my-16'>

            <h6
                className='px-2 text-center text-orange md:text-5xl text-3xl font-bold'
            >
                COMPLETE DIGITAL MARKETING <span className='text-skyBlue'>SOLUTIONS</span></h6>


            <div className="flex flex-wrap justify-center py-14">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="my-8 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 shadow-xl border-orange"
                    >
                        <h3 className={`mb-4 text-4xl font-bold ${plan.title === 'Premium' ? 'text-orange' : 'text-skyBlue'}`}>
                            {plan.title}
                        </h3>
                        <div className="mx-auto mb-4 w-20 bg-skyBlue h-1"></div>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="text-skyBlue text-3xl font-semibold">{plan.price}</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <TiTick className="flex-shrink-0 w-5 h-5 text-orange" />
                                    <span
                                        className='text-orange font-bold'
                                    >{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="btn-container flex justify-center">
                            <NavLink to="/contact">
                                <Button
                                    children={"CHOOSE PLAN"}
                                    className='md:block text-white px-6 font-bold bg-[#60c0e2]
                      hover:bg-[#ffffff] hover:text-skyBlue border-[1.5px] border-[#60c0e2] duration-500'
                                />
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grow-btn-container flex justify-center">
            <NavLink to="/contact">
              <Button
                children='Click For Customized Plan'
                className='font-bold  text-white py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
              />
            </NavLink>

          </div>

{/* br */}
          <div className="mx-auto my-12 w-[70%] bg-skyBlue h-[2px]"></div>

        </div>
    );
}

export default Pricing;
