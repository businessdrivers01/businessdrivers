import React from 'react'
import { FaPen, FaBook, FaFileAlt, FaNewspaper, FaEdit, FaThumbtack } from 'react-icons/fa';
import { PricingCard, ServiceCards } from '../../../utils';

function ContentWriting() {
  const contentWritingServices = [
    {
      id: 1,
      icon: <FaPen className="text-orange text-4xl" />,
      heading: 'Article Writing',
      description: 'Crafting high-quality, engaging articles tailored to your audience and goals.'
    },
    {
      id: 2,
      icon: <FaBook className="text-orange text-4xl" />,
      heading: 'Blog Posts',
      description: 'Creating informative and compelling blog posts to drive traffic and engage readers.'
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-orange text-4xl" />,
      heading: 'Website Copy',
      description: 'Developing persuasive website copy to capture your brand’s voice and convert visitors into customers.'
    },
    {
      id: 4,
      icon: <FaNewspaper className="text-orange text-4xl" />,
      heading: 'Press Releases',
      description: 'Writing impactful press releases to announce news and updates about your business.'
    },
    {
      id: 5,
      icon: <FaEdit className="text-orange text-4xl" />,
      heading: 'Editing and Proofreading',
      description: 'Providing thorough editing and proofreading to ensure your content is polished and error-free.'
    },
    {
      id: 6,
      icon: <FaThumbtack className="text-orange text-4xl" />,
      heading: 'Content Strategy',
      description: 'Developing a strategic approach to content creation that aligns with your marketing goals and audience needs.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$150/Article',
      features: [
        '400 Words',
        'Topic Research',
        'SEO Content',
        'References & Citation',
        'Well Structured'
      ],
    },
    {
      title: 'Standard',
      price: '$300/Article',
      features: [
        '1000 Words',
        'Topic Research',
        'SEO Content',
        'References & Citation',
        'Well Structured'
      ],
    },
    {
      title: 'Premium',
      price: '$400/Article',
      features: [
        '1500 Words',
        'Topic Research',
        'SEO Content',
        'References & Citation',
        'Well Structured'
      ],
    },
  ];

  return (
    <div>
      <ServiceCards
        title1="Content Writing"
        title2="Services"
        description="Our Content Writing services offer well-crafted and engaging content tailored to your needs and audience."
        services={contentWritingServices}
      />

      <PricingCard
        title1="EXPERT"
        title2="CONTENT WRITING"
        plans={pricingPlans}
      />
    </div>
  )
}

export default ContentWriting;
