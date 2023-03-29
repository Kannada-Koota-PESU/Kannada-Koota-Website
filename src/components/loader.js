import Vid from '../assets/videoplayback.mp4';
import './loader.css'
import React,{ useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Loader() {
  const [raised, setRaised] = useState(false);

    const navigate=useNavigate();
    useEffect(() => {
      function handleClick(event) {
        console.log('Mouse clicked anywhere on the screen!');
    setRaised(true);
  // navigate('/landing');


      }
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
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
    <div className={`fullpage ${raised ? 'raise-up' : ''}`}>
    
  <div className="container" >

    <video autoPlay loop muted>
      <source src={Vid} type="video/mp4" />
    </video>
    <div className="text">
      <h1>ಕನ್ನಡಕೂಟ</h1>
    </div>
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
</div>

  );
}

export default Loader;
