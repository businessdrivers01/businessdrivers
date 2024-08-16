import React from 'react';
import { Button } from '../../utils';
import { NavLink } from 'react-router-dom';
import { SliderComponent, Welcome, WhoWeAre, WhyUs } from "../"

function Home() {
  return (
    <>
      <main
        className='flex flex-col items-center pt-16'
      >
        {/* Text Section 👇🏻 */}
        {/* <div className="text-center md:pl-24 pl-8 pr-2 text-orange">
          <h1 className='text-sm md:text-2xl font-semibold flex items-center'>
            WE <span className="mx-2 md:mx-16">ARE</span>
            <span className='text-2xl md:text-7xl font-bold text-skyBlue'>Beyond</span>
            <span className="mx-2 md:mx-16">THE</span>
            <span className='text-2xl md:text-7xl font-bold text-skyBlue'>Marketing.</span>
          </h1>

          <div className="grow-btn-container flex justify-center">
            <NavLink to="/all-services">
              <Button
                children='Look What We Can Do For You'
                className='font-bold text-sm md:text-xl text-white my-16 md:my-24 py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
              />
            </NavLink>
          </div>
        </div> */}
        <SliderComponent />
        <div className="grow-btn-container flex justify-center">
          <NavLink to="/all-services">
            <Button
              children='Look What We Can Do For You'
              className='font-bold text-sm md:text-xl text-white my-16 md:my-8 py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
            />
          </NavLink>
        </div>

      </main>

      <Welcome />
      <WhoWeAre />
      <WhyUs />

      <div className="boost-btn-container flex justify-center">
        <NavLink to="/contact">
          <Button
            children="Let's Boost Your Business"
            className='font-bold my-4  text-white py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
          />
        </NavLink>

      </div>
    </>
  );
}

export default Home;
