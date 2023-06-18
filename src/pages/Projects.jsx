import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { customFetchProjects } from '../utils/axios';
import gitHub from '../assets/svg/github.svg';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [currentProject, setCurrentProject] = useState(0);

  const fetching = async () => {
    try {
      const resp = await customFetchProjects();
      setLoading(false);
      setData(resp.data.records);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentProject(currentProject + 1);
      if (data.length - 1 <= currentProject) setCurrentProject(0);
    }, 5 * 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentProject]);

  const handleOnClick = (index) => {
    setCurrentProject(index);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <motion.div initial={{ transform: ['scale(0)'] }} animate={{ transform: ['scale(1)'] }} transition={{ duration: 0.5 }} className="flex items-center flex-col  h-screen  ">
      <h1 className="text-2xl">/Projects</h1>
      <div className="max-w-sm relative lg:max-w-2xl w-96 ">
        <h1 className="absolute  md:-left-10  text-[3rem] top-3 text-primary_orange font-bold leading-10 ">My Projects</h1>
      </div>

      <article className="  flex justify-center relative  items-center gap-5 mt-72   ">
        {data.map((item, index) => {
          const { images, code, demo, name, stack, type } = item.fields;
          return (
            <div
              key={index}
              className={`  flex flex-col justify-center items-center w-52 lg:w-[30rem]   transition-all  backdrop-blur-sm absolute overflow-hidden shadow-custom rounded-md group ${
                currentProject === index ? '' : `translate-x-[200%] opacity-0`
              }  `}
            >
              <img src={images[0].url} alt="test" className="rounded-md lg:hidden " />
              <img src={images[1].url} alt="test" className="rounded-md hidden lg:block h-80  w-[30rem] " />

              <div className="flex gap-5 transition-all gradient backdrop-blur-sm  h-4/5 absolute p-5 rounded-md bottom-0  w-full opacity-0  group-hover:opacity-100 flex-col items-center font-semibold font-moonDance tracking-widest duration-500">
                <h1 className="text-white font-extrabold border-b-orange-700 border-b-2 text-base">{name}</h1>
                <button className="h-6  absolute bottom-5 right-10  rounded-sm hover:text-bg_primary_slate  text-white py-5 flex justify-center items-center ">
                  <a href={code} target="_blank">
                    <img src={gitHub} alt="" className="w-7 h-7  bg-white rounded-full hover:scale-105 hover:opacity-80" />
                  </a>
                  <hr className=" h-1 opacity-0 transition-all bg-black border-0 rounded " />
                </button>
                <button className="btn-go absolute bottom-5 left-10">
                  <a href={demo}>Demo</a>
                  <svg strokeWidth={4} stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </button>
                <ul className="flex flex-col self-start  px-3 text-white flex-wrap">
                  {stack.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>

                <h1 className="text-white font-extrabold border-b-white border-b-2 text-base hover:text-sky-500">{type}</h1>
              </div>
            </div>
          );
        })}
      </article>
      <ul className=" flex gap-5">
        {Array.from({ length: data.length }).map((_, index) => (
          <li key={index}>
            <button className={`circle w-5 h-5 z-10 mt-48 rounded-full hover:scale-105 ${currentProject === index ? 'bg-indigo-500' : 'bg-indigo-50 '}`} onClick={() => handleOnClick(index)}></button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Projects;
