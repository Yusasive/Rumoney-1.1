import React from 'react';
import JourneyImage from '../assets/images/OurJourney.png';

const Journey = () => {
  return (
    <div className='w-full h-fit'>
       <img
            src={JourneyImage}
            alt="Our Jouney"
            className="object-contain"
            placeholder="blur"
            loading="lazy"
          />
    </div>
  )
}

export default Journey;
