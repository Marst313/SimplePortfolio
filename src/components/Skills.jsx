import React from 'react';
import { skillLinks } from '../utils/links';

const Skills = () => {
  return (
    <section className="skills-container relative group overflow-visible">
      <h1 className="group-hover:opacity-0 transition-all">skills</h1>
      <div className="container-rounded">
        {skillLinks.map((item) => {
          return (
            <div key={item.id} className={`z-10 rounded-full flex justify-center items-center group relative flex-wrap  `}>
              <img src={item.logo} alt={item.name} className={`opacity-0 group-hover:opacity-100 transition-all  w-5 h-5 lg:w-6 lg:h-6 hover:animate-bounce613 `} />
              <h2 className={`opacity-0 absolute group-hover:opacity-100 translate-y-[150%]  transition-all  text-xs lg:text-base cursor-default`}>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
