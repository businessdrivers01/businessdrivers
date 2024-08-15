import React from "react";
import { FaBullseye, FaEye, FaHandshake, FaChartLine, FaRocket, FaLightbulb } from "react-icons/fa";
import { OurResults, WhyUs } from "../";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const cardData = [
    {
      icon: <FaBullseye className="text-orange text-4xl" />,
      title: "Our Mission",
      description:
        "To empower businesses by crafting innovative digital marketing strategies that drive measurable results and long-term success.",
    },
    {
      icon: <FaEye className="text-orange text-4xl" />,
      title: "Our Vision",
      description:
        "To be the leading digital marketing partner, recognized for our expertise, creativity, and unwavering commitment to client success.",
    },
    {
      icon: <FaChartLine className="text-orange text-4xl" />,
      title: "Data-Driven Approach",
      description:
        "We leverage data and analytics to create strategies that are not just innovative but also grounded in measurable outcomes.",
    },
    {
      icon: <FaHandshake className="text-orange text-4xl" />,
      title: "Client-Centric Service",
      description:
        "Our clients' success is our success. We build strong relationships and collaborate closely to ensure we meet their goals.",
    },
    {
      icon: <FaRocket className="text-orange text-4xl" />,
      title: "Proven Results",
      description:
        "With a track record of successful campaigns, we deliver tangible results that propel businesses forward.",
    },
    {
      icon: <FaLightbulb className="text-orange text-4xl" />,
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends and offer cutting-edge solutions that keep our clients competitive in the digital landscape.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold text-orange mb-4">
            About <span className="text-skyBlue">Us</span>
          </h2>
          <p className="text-orange font-semibold text-xl">
            We are <span className="text-skyBlue">Business Drivers,</span> that helps businesses achieve their goals.
          </p>
        </div>
        <div className="space-y-8">
          {cardData.map((card, index) => {
            const { ref, inView } = useInView({
              threshold: 0.3,
              triggerOnce: true,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className={`text-center p-8 bg-gray-100 rounded-lg shadow-lg md:w-2/3 ${
                  index % 2 !== 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-3xl font-semibold text-orange mb-2">{card.title}</h3>
                <p className="text-skyBlue font-semibold">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <OurResults />
      <div className="bg-white py-8">
        <WhyUs />
      </div>
    </section>
  );
};

export default About;
