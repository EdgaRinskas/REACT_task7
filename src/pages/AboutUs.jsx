// AboutUs.jsx
import React from 'react';
import aboutUsImage from '../assets/about_us.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="img-about-us" style={{ backgroundImage: `url(${aboutUsImage})` }}>
        <div className="text-cont">
          <div className="our-story">
            <p>
              Take a look at the following small business success story examples, from famous millionaires
              with humble beginnings to local small business owners making a name for themselves. In each case,
              determination and willpower helped these entrepreneurs take an idea and convert it into a profitable venture.
              See what you can learn from their experiences to take your own brand to new heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
