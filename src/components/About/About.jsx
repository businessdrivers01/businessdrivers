import React from "react";
import { FaBullseye, FaEye, FaHandshake, FaChartLine, FaRocket, FaLightbulb } from "react-icons/fa";
import { OurResults, WhyUs } from "../"
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



  return (
    <section id="about" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold text-orange mb-4">About <span className="text-skyBlue">Us</span></h2>
          <p className="text-skyBlue font-semibold text-xl">
            We are Business <span className="text-orange">Drivers</span>, a results-driven digital marketing agency that
            helps businesses  <span className="text-orange">achieve their goals</span> through customized marketing
            strategies. Our mission is to elevate your brand and maximize your
            online presence with innovative solutions and expert insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-100 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-orange mb-2">
                {card.title}
              </h3>
              <p className="text-skyBlue font-semibold">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <OurResults />
      <div className="bg-white py-8">
      <WhyUs/>
      </div>
    </section>
  );
};

export default About;