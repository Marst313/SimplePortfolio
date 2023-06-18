import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { educationData, experienceData } from '../utils/links';
const Experience = () => {
  const [experience, setExperience] = useState(true);
  return (
    <motion.div initial={{ transform: ['scale(0)'] }} animate={{ transform: ['scale(1)'] }} transition={{ duration: 0.5 }} className="container-experience_page">
      <h1>/Experience</h1>
      <div>
        <h1>{experience ? 'experience' : 'education'} </h1>
        <div className="mt-24 flex justify-center items-center gap-4  ">
          <button type="button" className={`${experience ? 'bg-primary_orange' : ''} border-primary_orange  border-2 transition-all duration-500 px-5 rounded-sm w-40 lg:w-60 `} onClick={() => setExperience(true)}>
            <h1>my experience</h1>
          </button>
          <button type="button" className={`${!experience ? 'bg-primary_orange' : ''} w-40 lg:w-60 border-primary_orange border-2 transition-all duration-500 px-5 rounded-sm`} onClick={() => setExperience(false)}>
            <h1>my education</h1>
          </button>
        </div>

        {experience ? (
          <ol>
            {experienceData.map((item) => {
              return (
                <li key={item.id}>
                  <div></div>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ol>
        ) : (
          <ol>
            {educationData.map((item) => {
              return (
                <li key={item.id}>
                  <div></div>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
