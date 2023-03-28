import Vid from '../assets/videoplayback.mp4';
import './loader.css'
import React,{ useEffect, useState} from 'react';
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

  
  
// --------------------------------
const [messages, setMessages] = useState([]);

  function getRandomPosition() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const top = Math.floor(Math.random() * height);
    const left = Math.floor(Math.random() * width);
    return { top, left };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const words = ["ಜೀವ"," ದೈವ ","ಬದುಕು","  ಸಂಸ್ಕೃತಿ","  ಪರಂಪರೆ","ಪ್ರೀತಿ","ಸೊಗಸು","ಆರಾಧ್ಯ",
      'ಜನನಿ',' ಉಸಿರು',' ಹೆಮ್ಮೆ','ಅಭಿಮಾನ',' ಗೌರವ',' ಭಾವ' ];
      const text = words[Math.floor(Math.random() * words.length)];
      const message = {
        text: text,
        style: {
          top: getRandomPosition().top + 'px',
          left: getRandomPosition().left + 'px',
          opacity: 1,
        },
      };
      setMessages((prevMessages) => [...prevMessages, message]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  
console.log(messages)



  



  return (
    <>
    <meta charSet="UTF-8" />
  <title>loader</title>
  <div className="container" >

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
  <div id='container'>
  {messages.map((message, index) => (
        <div
          key={index}
          className="message hide color-change"
          style={message.style}
        >
          {message.text}
        </div>
      ))}
      </div>
</>

  );
}

export default Loader;
