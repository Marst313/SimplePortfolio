import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  return (
    <section className="w-1/2 cursor-pointer hover:animate-jello" onClick={() => navigate('/experience')}>
      <h1>experience</h1>
    </section>
  );
};

export default Experience;
