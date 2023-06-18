import { Link, Outlet, useParams } from 'react-router-dom';
import musicOn from '../assets/svg/musicOn.svg';
import musicOff from '../assets/svg/musicOff.svg';

import { useEffect, useRef, useState } from 'react';
import songs from '../assets/others/HeroesTonight.mp3';

const Navbar = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  const handleClick = () => {
    setMuted(!muted);
    if (!muted) {
      audioRef.current.volume = '0';
    } else {
      audioRef.current.volume = '0.3';
    }
  };

  useEffect(() => {
    audioRef.current.volume = '0.3';

    const playAudio = () => {
      audioRef.current.play();
    };
    document.addEventListener('click', playAudio);

    return () => {
      // Hapus event listener saat komponen dihapus
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="relative">
      <audio src={songs} ref={audioRef} loop className="hidden bg-white" />
      {muted ? (
        <button type="button" onClick={handleClick}>
          <img src={musicOff} alt="music-on" className="w-5 h-5 absolute top-5 right-5 lg:w-7 lg:h-7" />
        </button>
      ) : (
        <button type="button" onClick={handleClick}>
          <img src={musicOn} alt="music-off" className="w-5 h-5 absolute top-5 right-5 lg:w-7 lg:h-7" />
        </button>
      )}

      <Link to="/">
        <h1 className="text-2xl">Landing </h1>
      </Link>

      <Outlet />
    </div>
  );
};

export default Navbar;
