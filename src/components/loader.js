import Vid from '../assets/videoplayback.mp4';
import './loader.css'
import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



function Loader() {
    const navigate=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolled");
      navigate('/landing');
      // Do something when the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);



  return (
    <>
    <meta charSet="UTF-8" />
  <title>loader</title>
  <div className="container">

    <video autoPlay loop muted>
      <source src={Vid} type="video/mp4" />
    </video>
    <div className="text">
      <h1>ಕನ್ನಡಕೂಟ</h1>
    </div>
  </div>
  <div className="arrow">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 20 L 90 60 L 80 70 L 50 40 L 20 70 L 10 60 L 50 20 Z" />
    </svg>
  </div>
</>

  );
}

export default Loader;
