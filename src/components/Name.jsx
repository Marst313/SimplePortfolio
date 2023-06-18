import React from 'react';
import logo from '../assets/images/logo.png';

const Name = () => {
  return (
    <section className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={logo} alt="logo" />
        </div>

        <div className="flip-card-back">
          <h2>
            <span> Name :</span> I Nyoman Karma Dharma Nalendra Wardana
          </h2>
          <h2>
            <span> Email :</span> dlegoinyoman1@gmail.com
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Name;
