import React from 'react'
import { FaGoogle, FaFacebook, FaYahoo, FaAd, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { PricingCard, ServiceCards } from '../../../utils';

function PPC() {
  const ppcServices = [
    {
      id: 1,
      icon: <FaGoogle className="text-orange text-4xl" />,
      heading: 'Google Ads Management',
      description: 'Creating and managing Google Ads campaigns to drive targeted traffic and increase conversions.'
    },
    {
      id: 2,
      icon: <FaFacebook className="text-orange text-4xl" />,
      heading: 'Facebook Ads Optimization',
      description: 'Optimizing Facebook Ads campaigns to reach a wider audience and improve ad performance.'
    },
    {
      id: 3,
      icon: <FaYahoo className="text-orange text-4xl" />,
      heading: 'Yahoo Ads Services',
      description: 'Managing Yahoo Ads campaigns to enhance visibility and drive relevant traffic to your site.'
    },
    {
      id: 4,
      icon: <FaAd className="text-orange text-4xl" />,
      heading: 'Display Advertising',
      description: 'Creating compelling display ads to capture audience attention and increase brand awareness.'
    },
    {
      id: 5,
      icon: <FaChartLine className="text-orange text-4xl" />,
      heading: 'Performance Tracking',
      description: 'Tracking ad performance and providing insights to optimize campaigns for better ROI.'
    },
    {
      id: 6,
      icon: <FaDollarSign className="text-orange text-4xl" />,
      heading: 'Budget Management',
      description: 'Managing ad budgets effectively to maximize return on investment and control costs.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$200/7 Days',
      features: [
        'Account Setup',
        'Campaigns Audit',
        '2 Suggestions',
        'Keyword Theme',
        'Audience Targeting',
        '3 Ad Extensions',
        '20 Keywords'
      ],
    },
    {
      title: 'Standard',
      price: '$350/7 Days',
      features: [
        'Account Setup',
        '30 Keywords',
        'Campaign Audit',
        'Campaign Setup',
        '3 Suggestions',
        'Keyword Theme',
        'Audience Targeting',
        '5 Ad Extensions',
        '7 Days Management'
      ],
    },
    {
      title: 'Premium',
      price: '$450/14 Days',
      features: [
        'Account Setup',
        '40 Keywords',
        'Campaign Audit',
        'Campaign Setup',
        '3 Suggestions',
        'Keyword Theme',
        'Audience Targeting',
        '5 Ad Extensions',
        '14 Days Management'
      ],
    },
  ];

  return (
    <div>
      <ServiceCards
        title1="Pay Per Click"
        title2="(PPC)"
        description="Our PPC services are designed to drive targeted traffic to your website and maximize your return on investment through strategic ad management."
        services={ppcServices}
      />

      <PricingCard
        title1="COMPLETE"
        title2="PPC SOLUTIONS"
        plans={pricingPlans}
      />
    </div>
  )
}

export default PPC;
