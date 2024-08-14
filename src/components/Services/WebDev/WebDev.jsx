import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaWordpress, FaHtml5, FaCss3 } from 'react-icons/fa';
import { PricingCard, ServiceCards } from '../../../utils';

function WebDev() {
  const webDevServices = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-orange text-4xl" />,
      heading: 'Custom Web Development',
      description: 'Building custom websites tailored to your specific business needs and goals.'
    },
    {
      id: 2,
      icon: <FaMobileAlt className="text-orange text-4xl" />,
      heading: 'Responsive Design',
      description: 'Ensuring your website looks great and functions well on all devices, including mobile and tablet.'
    },
    {
      id: 3,
      icon: <FaDesktop className="text-orange text-4xl" />,
      heading: 'UI/UX Design',
      description: 'Creating user-friendly and visually appealing interfaces to enhance user experience.'
    },
    {
      id: 4,
      icon: <FaWordpress className="text-orange text-4xl" />,
      heading: 'Content Management Systems',
      description: 'Implementing CMS solutions like WordPress for easy website management and content updates.'
    },
    {
      id: 5,
      icon: <FaHtml5 className="text-orange text-4xl" />,
      heading: 'HTML/CSS Development',
      description: 'Developing websites using modern HTML and CSS techniques for a clean and professional look.'
    },
    {
      id: 6,
      icon: <FaCss3 className="text-orange text-4xl" />,
      heading: 'Web Performance Optimization',
      description: 'Enhancing website speed and performance to ensure fast load times and smooth user experience.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$600',
      features: [
        'Functional website',
        '5 pages',
        'Responsive design',
        'Content upload',
        '5 plugins/extensions',
        'E-commerce functionality',
        '10 products'
      ],
    },
    {
      title: 'Premium',
      price: '$1200',
      features: [
        'Functional website',
        '10 pages',
        'Responsive design',
        'Content upload',
        '10 plugins/extensions',
        'E-commerce functionality',
        '15 products'
      ],
    },
  ];

  return (
    <div>
      <ServiceCards
        title1="Website Design and Development"
        title2="Solutions"
        description="Our Web Design and Development services are crafted to deliver high-quality, functional websites tailored to your business needs."
        services={webDevServices}
      />

      <PricingCard
        title1="WE BUILD WEBSITES,"
        title2="THAT SELL."
        plans={pricingPlans}
      />
    </div>
  )
}

export default WebDev;
