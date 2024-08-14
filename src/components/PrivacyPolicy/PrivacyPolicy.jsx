import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange mb-6">Privacy Policy</h1>
      <p className="text-skyBlue font-medium text-lg mb-4">
        We value your privacy and are committed to protecting your personal information.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-orange mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect personal information such as name, email address, and contact details when you use our services.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is used to provide and improve our services, communicate with you, and for marketing purposes.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">4. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">5. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">6. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
