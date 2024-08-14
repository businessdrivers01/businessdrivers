import React from 'react';
import { FaSearch, FaUserAlt, FaCogs, FaLink,FaChartLine,FaMobileAlt   } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { Button, PricingCard, ServiceCards } from '../../../utils';
const SEO = () => {
  // Example data array
  const services = [
    {
      id: 1,
      icon: <FaSearch className="text-orange text-4xl" />,
      heading: 'Keyword Research',
      description: 'Identifying the most effective keywords to target for your business.'
    },
    {
      id: 2,
      icon: <FaUserAlt className="text-orange text-4xl" />,
      heading: 'On-Page Optimization',
      description: 'Optimizing individual pages to rank higher and earn more relevant traffic.'
    },
    {
      id: 3,
      icon: <FaCogs className="text-orange text-4xl" />,
      heading: 'Technical SEO',
      description: 'Improving the technical aspects of your website to enhance its performance and search engine ranking.'
    },
    {
      id: 4,
      icon: <FaLink className="text-orange text-4xl" />,
      heading: 'Link Building',
      description: 'Acquiring high-quality backlinks to improve your website’s authority and ranking.'
    },
    {
      id: 5,
      icon: <FaChartLine className="text-orange text-4xl" />,
      heading: 'SEO Analytics',
      description: 'Tracking and analyzing SEO performance to refine strategies and improve results.'
    },
    {
      id: 6,
      icon: <FaMobileAlt className="text-orange text-4xl" />,
      heading: 'Mobile Optimization',
      description: 'Ensuring your website is fully optimized for mobile devices to improve user experience and search ranking.'
    }
  ];
  

  const seoPlans = [
    {
      title: 'Basic',
      price: '$300/month',
      features: [
        'SEO audit',
        'Keyword Research',
        '3 keywords',
        'Competitor analysis',
        'On-page optimization',
        '100 Backlinks',
        'Bad links removal',
        'Technical SEO',
        'Off-page strategy',
        'Technical SEO Check',
        'robots.txt',
        'XML sitemap',
      ],
    },
    {
      title: 'Standard',
      price: '$450/month',
      features: [
        'SEO audit',
        'Keyword Research',
        '6 keywords',
        'Competitor analysis',
        'On-page optimization',
        '250 Backlinks',
        'Bad links removal',
        'Technical SEO',
        'Off-page strategy',
        'Technical SEO Check',
        'robots.txt',
        'XML sitemap',
      ],
    },
    {
      title: 'Premium',
      price: '$650/month',
      features: [
        'SEO audit',
        'Keyword Research',
        '10 keywords',
        'Competitor analysis',
        'On-page optimization',
        '400 Backlinks',
        'Bad links removal',
        'Technical SEO',
        'Off-page strategy',
        'Technical SEO Check',
        'robots.txt',
        'XML sitemap',
        'Guest Posting Strategy',
      ],
    },
  ];

  return (
    // Services
    <div>
      <ServiceCards 
      title1="Search Engine Optimization"
      title2="(SEO)"
      description="Boost your website's visibility and search engine rankings with our SEO services. We provide a range of SEO strategies to improve your online presence and drive more traffic to your website."
      services={services} />

      {/* Pricing */}

      <PricingCard 
      title1="COMPLETE"
      title2="SEO SOLUTIONS"
      plans={seoPlans} />
    </div>
  );
};

export default SEO;
