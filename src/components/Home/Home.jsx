import React from 'react';
import { Button } from '../../utils';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clients, WhatElse } from '../';
import steeringWheelImg from '../../assets/steering-wheel.png'; // Replace with your steering wheel image path

function Home() {
  return (
    <>
      {/* Steering Wheel Animation */}
      <motion.div
        
        initial={{ opacity: 1, scale: 0 }}
        animate={{ rotate: 360, scale: 3, opacity: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className="fixed inset-0 flex items-center justify-center bg-transparent z-50 pointer-events-none"
      >
        <img 
        src={steeringWheelImg} alt="Steering Wheel" className="w-48 h-48 md:w-96 md:h-96" />
      </motion.div>

      <main className='flex flex-col items-center shadow-lg py-44'>
        {/* Text Section 👇🏻 */}
        <div className="text-center md:pl-24 pl-8 pr-2 text-orange">
          <h1 className='text-sm md:text-2xl font-semibold flex items-center'>
            WE <span className="mx-2 md:mx-16">ARE</span>
            <span className='text-2xl md:text-7xl font-bold text-skyBlue'>Beyond</span>
            <span className="mx-2 md:mx-16">THE</span>
            <span className='text-2xl md:text-7xl font-bold text-skyBlue'>Marketing.</span>
          </h1>

          <div className="grow-btn-container flex justify-center">
            <NavLink to="/contact">
              <Button
                children='Look What We Can Do For You'
                className='font-bold text-sm md:text-xl text-white my-16 md:my-24 py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
              />
            </NavLink>
          </div>
        </div>
      </main>

      <Clients />
      <WhatElse />
    </>
  );
}

export default Home;
