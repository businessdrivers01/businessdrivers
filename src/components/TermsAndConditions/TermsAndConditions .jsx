import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange mb-6">Terms and Conditions</h1>
      <p className="text-skyBlue font-medium text-lg mb-4">
        Please read these Terms and Conditions carefully before using our services.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-orange mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to these terms.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">2. Use of Our Services</h2>
        <p className="text-gray-700 mb-4">
          You agree to use our services only for lawful purposes and in accordance with these terms.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on our website, including text, images, and logos, is the property of our company and protected by intellectual property laws.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We shall not be liable for any damages arising from your use of our services or from any information on our website.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">5. Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new terms on our website.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange mb-4">6. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms and Conditions, please contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
