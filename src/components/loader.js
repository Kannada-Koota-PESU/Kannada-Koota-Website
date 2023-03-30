import Vid2 from '../assets/videoplayback2.mp4';
import Vid1 from '../assets/videoplayback1.mp4';


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
    useEffect(()=>{
      setTimeout(() => {
    setRaised(true);
        
      }, 10000);
    },[]);


  
  
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

    <video autoPlay loop muted id='v1'>
      <source src={Vid1} type="video/mp4" />
    </video>
    <video autoPlay loop muted id='v2'>
      <source src={Vid2} type="video/mp4" />
    </video>
    


    <div className="text">
      <h1>ಕನ್ನಡ ಕೂಟ</h1>
    </div>
  </div>
  
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

  );
}

export default Loader;
