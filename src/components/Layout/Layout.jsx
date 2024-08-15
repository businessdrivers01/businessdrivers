import React, { useState, useEffect } from 'react';
import '../../css/Layout.css';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';
import { motion } from 'framer-motion';
import steeringWheelImg from '../../assets/steering-wheel.png'; 
import { Button } from '../../utils';

function Layout() {
    const phoneNumber = "923136317109"; 
    const message = "Hello! I'm interested in your services."; 
  
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Set a timeout to delay the display of content until after the steering wheel animation
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // Duration of the steering wheel animation (3 seconds)

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return (
        <>
            {/* Steering Wheel Animation */}
            {!showContent && (
                <motion.div
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ rotate: 360, scale: 3, opacity: 0 }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    className="fixed inset-0 flex items-center justify-center bg-transparent z-50 pointer-events-none"
                >
                    <img src={steeringWheelImg} alt="Steering Wheel" className="w-48 h-48 md:w-96 md:h-96" />
                </motion.div>
            )}

            {/* Main content of the website */}
            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <Header />
                    <Outlet />
                    <Footer />

                    {/* WhatsApp Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50"
                    >
                        <Button
                            children={"CONTACT ON WHATSAPP"}
                            className="text-white text-sm px-4 py-3 font-bold bg-[#60c0e2]
                            hover:bg-white hover:text-skyBlue border-[1.5px] border-[#60c0e2] duration-500"
                        />
                    </a>
                </motion.div>
            )}
        </>
    );
}

export default Layout;
