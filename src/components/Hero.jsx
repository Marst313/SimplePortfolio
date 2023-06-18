import React from 'react';
import profile from '../assets/images/profile.png';

const Hero = () => {
  return (
    <section className="hero-container bg-gradient-to-r from-primary_orange  via-orange-500 to-orange-800">
      <img src={profile} alt="profile image" />
    </section>
  );
};

export default Hero;
