import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <section className="about-container cursor-pointer hover:animate-vibrate3 " onClick={() => navigate('/about')}>
      <h1>about me</h1>
    </section>
  );
};

export default AboutMe;
