import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaSnapchat, FaPinterest } from 'react-icons/fa';
import { PricingCard, ServiceCards } from '../../../utils';




function SMM() {
  const smmServices = [
    {
      id: 1,
      icon: <FaFacebookF className="text-orange text-4xl" />,
      heading: 'Facebook Management',
      description: 'Strategizing and managing your Facebook presence to boost engagement and brand visibility.'
    },
    {
      id: 2,
      icon: <FaInstagram className="text-orange text-4xl" />,
      heading: 'Instagram Growth',
      description: 'Creating and managing Instagram campaigns to grow your followers and enhance brand reach.'
    },
    {
      id: 3,
      icon: <FaTwitter className="text-orange text-4xl" />,
      heading: 'Twitter Engagement',
      description: 'Developing strategies to increase your Twitter engagement and drive more interactions with your audience.'
    },
    {
      id: 4,
      icon: <FaLinkedin className="text-orange text-4xl" />,
      heading: 'LinkedIn Networking',
      description: 'Optimizing your LinkedIn profile and content to build professional connections and drive business growth.'
    },
    {
      id: 5,
      icon: <FaSnapchat className="text-orange text-4xl" />,
      heading: 'Snapchat Campaigns',
      description: 'Crafting engaging Snapchat campaigns to reach a younger audience and boost brand awareness.'
    },
    {
      id: 6,
      icon: <FaPinterest className="text-orange text-4xl" />,
      heading: 'Pinterest Strategy',
      description: 'Developing and managing Pinterest strategies to drive traffic and promote your brand visually.'
    }
  ];
  const pricingPlans = [
    {
      title: 'Basic',
      price: '$200/month',
      features: [
        '1 Platform',
        'Content Creation',
        '4 Posts / Week',
        'Best Hashtags Strategy',
        'Captions',
        'Post Schedule'
      ],
    },
    {
      title: 'Standard',
      price: '$400/month',
      features: [
        '2 Platforms',
        'Content Creation',
        'Reels Creation',
        '7 Posts / Week',
        'Best Hashtags Strategy',
        'Captions',
        'Post Schedule',
        'Reporting'
      ],
    },
    {
      title: 'Premium',
      price: '$500/month',
      features: [
        '4 Platforms',
        'Content Creation',
        'Reels Creation',
        '7 Posts / Week',
        'Best Hashtags Strategy',
        'Captions',
        'Post Schedule',
        'Reporting',
        'Page / Channel Evaluation'
      ],
    },
  ];


  return (
    <div>
      <ServiceCards
        title1="Social Media Marketing"
        title2="(SMM)"
        description="Our Social Media Marketing services are designed to enhance your online presence and engage with your audience across various platforms."
        services={smmServices}
      />


      <PricingCard
        title1="COMPLETE"
        title2="SMM SOLUTIONS"
        plans={pricingPlans} />
    </div>
  )
}

export default SMM