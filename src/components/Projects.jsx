import React from 'react';
import rocket from '../assets/svg/rocket.svg';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="projects-container relative group cursor-pointer" onClick={() => navigate('/projects')}>
      <div className="w-[50rem] h-[50rem]  rounded-full group-hover:animate-bounceBg  group-hover:bg-primary_orange absolute duration-1000 transition-all"></div>

      <img src={rocket} alt="rocket image" className="w-20 h-20  absolute  group-hover:animate-launch  duration-1000  -bottom-20 group-hover:bottom-10 " />
      <h1 className="group-hover:translate-y-[-500%] duration-700">projects</h1>
    </section>
  );
};

export default Projects;
