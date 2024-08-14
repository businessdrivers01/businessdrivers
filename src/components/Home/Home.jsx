import React from 'react'
import mainImg from "../../assets/main-img.png"
import { Button } from '../../utils';
import { NavLink } from 'react-router-dom';
import { AboutUs, Clients, OurResults, Pricing, WhatElse, WhyUs } from '../';
function Home() {
  return (
    <>
      <main className='flex flex-col md:flex-row shadow-lg pb-4'>

        {/* Left Section 👇🏻 */}
        <div className="left md:pl-24 pl-8 pr-2 text-orange">
          <p className="font-semibold md:w-[40vw] catch-phrase text-[19px] my-8">
            Elevate, Captivate, & Dominate. Together, We Ignite Digital Success.
          </p>

          <h1
            className='text-[50px] font-bold md:w-[40vw] leading-[50px]'
          ><span className='text-skyBlue '>

              DIGITAL MARKETING AGENCY</span> THAT DRIVE <br />REVENUE GROWTH</h1>

          <h2
            className='text-[19px] font-semibold md:w-[40vw] mt-8'
          >Buy SEO, PPC, SMM and other digital marketing services. Our digital marketing experts provide services from organic growth to paid advertising. Business Drivers is one of the best digital marketing agency to solve your digital bottlenecks with dedicated digital marketing experts.</h2>

          <div className="grow-btn-container flex md:block">
            <NavLink to="/contact">
              <Button
                children='Grow Your Business With Us'
                className='font-bold text-white my-4 py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
              />
            </NavLink>

          </div>
        </div>


        {/* Right Section 👇🏻 */}
        <div className="right md:pl-32 pt-10 flex md:block justify-center">
          <img
            className='md:w-[30vw] w-[60vw]'
            src={mainImg} alt="" />
        </div>

      </main>

      <Clients />
      <OurResults />
      <Pricing />
      <WhatElse />
      <AboutUs />
      <WhyUs />
    </>
  )
}


export default Home;