import React from 'react';
import { FaPaintBrush, FaCamera, FaStar, FaTag, FaPalette, FaApple } from 'react-icons/fa';
import { PricingCard, ServiceCards } from '../../../utils';

function CreativesBranding() {
  const creativesAndBrandingServices = [
    {
      id: 1,
      icon: <FaPaintBrush className="text-orange text-4xl" />,
      heading: 'Logo Design',
      description: 'Creating unique and memorable logos that represent your brand effectively.'
    },
    {
      id: 2,
      icon: <FaCamera className="text-orange text-4xl" />,
      heading: 'Visual Branding',
      description: 'Developing a consistent visual identity for your brand across all platforms.'
    },
    {
      id: 3,
      icon: <FaStar className="text-orange text-4xl" />,
      heading: 'Brand Strategy',
      description: 'Crafting strategies to build and enhance your brand’s presence and reputation.'
    },
    {
      id: 4,
      icon: <FaTag className="text-orange text-4xl" />,
      heading: 'Marketing Collaterals',
      description: 'Designing engaging marketing materials that support your branding efforts.'
    },
    {
      id: 5,
      icon: <FaPalette className="text-orange text-4xl" />,
      heading: 'Creative Direction',
      description: 'Providing creative direction to ensure all elements of your brand are aligned and effective.'
    },
    {
      id: 6,
      icon: <FaApple className="text-orange text-4xl" />,
      heading: 'App Design',
      description: 'Designing user-friendly and visually appealing interfaces for your mobile applications.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$150',
      features: [
        '3 Concepts',
        'Logo Transparency',
        'Printable file',
        'Include 3D mockup',
        'Include source file',
        'App Icon',
        'All File Formats',
        'Fonts & Color Codes'
      ],
    },
    {
      title: 'Standard',
      price: '$300',
      features: [
        '3 Concepts',
        'Logo Transparency',
        'Printable file',
        'Include 3D mockup',
        'Include source file',
        'Social Media Kit',
        'All File Formats',
        'Fonts & Color Codes'
      ],
    },
    {
      title: 'Premium',
      price: '$350',
      features: [
        '3 Concepts',
        'Logo Transparency',
        'Printable file',
        'Include 3D mockup',
        'Include source file',
        'Social Media Kit',
        'All File Formats',
        'Fonts & Color Codes',
        'Vector File',
        'Stationery designs'
      ],
    },
  ];

  return (
    <div>
      <ServiceCards
        title1="Creatives and Branding"
        title2="Services"
        description="Our Creatives and Branding services will elevate your brand's visual identity and impact."
        services={creativesAndBrandingServices}
      />

      <PricingCard
        title1="DESIGN AND BRANDING"
        title2="SOLUTIONS"
        plans={pricingPlans}
      />
    </div>
  );
}

export default CreativesBranding;
