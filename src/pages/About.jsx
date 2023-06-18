import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  return (
    <motion.div initial={{ transform: ['scale(0)'] }} animate={{ transform: ['scale(1)'] }} transition={{ duration: 0.5 }} className="flex items-center flex-col overflow-hidden ">
      <h1 className="text-2xl">/About</h1>
      <div className="max-w-sm relative lg:max-w-2xl ">
        <h1 className="absolute left-2 md:-left-10  text-[3rem] top-8 text-primary_orange font-bold ">About Me</h1>

        <p className="p-5  mt-14  font-normal text-gray-400 leading-relaxed ">
          Hello! Allow me to introduce myself. My name is <span className="text-gray-200">I Nyoman Karma Dharma Nalendra Wardana </span> , and I am a passionate and dedicated junior front-end developer. I am currently collage in Amikom
          University Yogyakarta, I have a profound interest in web dev. With my educational background and studies in computer science, I have acquired a solid foundation in programming, HTML, CSS, and JavaScript. I have also developed a
          strong understanding of responsive web design principles and accessibility. Currently, I am continuously honing my skills through personal projects and completing coursework assignments. I am highly enthusiastic about ongoing
          learning and deepening my understanding of front-end frameworks such as React {/* and Vue */}, as well as exploring the latest industry trends and technologies.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
