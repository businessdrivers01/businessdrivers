import React from 'react';

const ServiceCards = ({ services, title1, title2, description }) => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl text-center font-bold text-orange mb-6">{title1} <span className='text-skyBlue'>{title2}</span></h2>
            <p className="text-skyBlue text-center font-semibold text-lg mb-8">
                {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="text-center p-6 bg-gray-100 rounded-lg shadow-lg"
                    >
                        <div className="flex justify-center mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-orange mb-2">
                            {service.heading}
                        </h3>
                        <p className="text-skyBlue font-medium">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
