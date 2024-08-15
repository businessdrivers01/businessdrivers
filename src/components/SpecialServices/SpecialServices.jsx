import React from 'react';
import { FaChartLine, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../../utils';
import { NavLink } from 'react-router-dom';


const SpecialServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaLightbulb className="text-orange text-4xl" />,
      heading: 'Strategic Marketing Consulting',
      description: 'Our experts work closely with you to develop marketing strategies that are aligned with your business objectives and designed to maximize impact and ROI.',
    },
    {
      id: 2,
      icon: <FaRocket className="text-orange text-4xl" />,
      heading: 'Growth Hacking',
      description: 'Our innovative growth hacking techniques are designed to accelerate growth and achieve significant results in a short period.',
    },
    {
      id: 3,
      icon: <FaChartLine className="text-orange text-4xl" />,
      heading: 'Market Analysis and Research',
      description: 'Gain valuable insights into market trends, consumer behavior, and competitive landscapes with our in-depth research and analysis services.',
    },
    {
      id: 4,
      icon: <FaHandshake className="text-orange text-4xl" />,
      heading: 'Sales Enablement',
      description: 'Our sales enablement services empower your sales team with the training, tools, and resources needed to close deals effectively and efficiently.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
   <>
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold text-orange mb-4">
            Special <span className="text-skyBlue">Services</span>
          </h2>
          <p className="text-orange font-semibold text-xl">
            We offer a range of specialized services to help your business thrive.
          </p>
        </div>
        <div className="space-y-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              threshold: 0.5,
              triggerOnce: false,
            });

            return (
              <motion.div
                key={service.id}
                ref={ref}
                className={`my-8 text-center p-8 bg-gray-100 rounded-lg shadow-lg md:w-2/3 ${
                  index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-3xl font-semibold text-orange mb-2">{service.heading}</h3>
                <p className="text-skyBlue font-semibold">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
   
    <div className="grow-btn-container flex justify-center">
            <NavLink to="/contact">
              <Button
                children='Click For Customized Plan'
                className='font-bold  text-white py-4 px-8 bg-skyBlue hover:bg-white hover:text-skyBlue duration-300 hover:scale-105 border-white border-2 hover:border-skyBlue'
              />
            </NavLink>

          </div>

   </>
  );
};

export default SpecialServices;
