import cv from '../assets/svg/cvIcon.svg';

const CV = () => {
  const handleDownload = async () => {
    try {
      const resp = await fetch('CV.pdf');
      const blob = new Blob([resp.url], { type: 'application/pdf' });
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'CV.pdf';
      alink.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="cv-container group relative hover:border-2 border-primary_orange">
      <h1 className="group-hover:opacity-0 transition-all">resume</h1>

      <div className="bg-bg_primary_slate w-full h-full absolute -translate-y-full transition-all duration-500 group-hover:-translate-y-1/2"></div>
      <div className="bg-bg_primary_slate w-full h-full absolute translate-y-full transition-all duration-500 group-hover:translate-y-1/2"></div>
      <div className="bg-bg_primary_slate w-full h-full absolute translate-x-full transition-all duration-500 group-hover:translate-x-1/2"></div>
      <div className="bg-bg_primary_slate w-full h-full absolute -translate-x-full transition-all duration-500 group-hover:-translate-x-1/2"></div>

      <button className="absolute opacity-0 text-white uppercase group-hover:opacity-100 transition-all font-moonDance h-full w-full text-xs" onClick={handleDownload}>
        Download CV
        <img src={cv} alt="icons-cv" className="absolute w-2 top-2 right-2 translate-x-[200%] group-hover:translate-x-0 transition-all lg:w-8" />
      </button>
    </section>
  );
};

export default CV;
