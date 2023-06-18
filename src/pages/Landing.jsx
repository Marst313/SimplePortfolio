import { AboutMe, Contacts, CV, Experience, Hero, Name, Projects, Skills } from '../components/';

const Landing = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full  lg:flex-row lg:gap-2">
        <Hero />
        <Name />
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:gap-2">
        <Skills />
        <div className="flex justify-evenly w-full gap-2 lg:w-1/2">
          <CV />
          <Contacts />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:gap-2">
        <div className="flex justify-evenly w-full gap-2 lg:w-1/2">
          <AboutMe />
          <Experience />
        </div>
        <Projects />
      </div>
    </main>
  );
};

export default Landing;
