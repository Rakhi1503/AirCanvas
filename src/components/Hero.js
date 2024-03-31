// frontend/src/components/Hero.jsx

import React from "react";
import axios from 'axios';

const Hero = () => {
  const handleCanvasButtonClick = () => {
    // Make a POST request to your Python backend
    axios.post('http://127.0.0.1:5000/api/aircanvas') // Adjust the URL as needed
      .then(res => {
        // Handle the response if needed
        console.log('Air canvas functionality implemented:', res.data.result);
      })
      .catch(err => {
        // Handle errors
        console.error('Error calling air canvas function:', err);
      });
  };

  return (
    <React.Fragment>
      <section>
        <div className='centered h-screen -mt-20'>
          <div>
            <div className="text-white">
              <p className='text-4xl md:text-6xl'>The Magic of Gesture </p>
            </div>
            <div className='space-x-10 mt-9 centered'>
              <button className='bg-red-500' onClick={handleCanvasButtonClick}>Canvas</button>
              {/* Add onClick event handler for the button */}
              <button>Slide Navigation</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
