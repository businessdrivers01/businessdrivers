import React from 'react';
import image1 from '../../../assets/clients/client1.webp';
import image2 from '../../../assets/clients/client2.webp';
import image3 from '../../../assets/clients/client3.webp';
import image4 from '../../../assets/clients/client4.webp';
import image5 from '../../../assets/clients/client5.webp';
import image6 from '../../../assets/clients/client6.webp';
import image7 from '../../../assets/clients/client7.webp';

function Clients() {

  const images = [image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,image1, image2, image3, image4, image5, image6, image7,];

  return (
    <div className="mt-8 md:mt-16 shadow-sm pb-8">
      <h3 className="text-4xl md:text-5xl text-orange text-center font-bold">
      <span className='text-skyBlue'>CLIENTS</span> WE HAVE WORKED WITH
      </h3>
      <div className="mt-12 md:mt-20 overflow-hidden white-space-nowrap flex">
        <div className="flex animate-ticker">
          {images.map((image, index) => (
           
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-[120px] object-left-top mr-14 rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
            />
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
