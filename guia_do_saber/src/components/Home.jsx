import { ChatGPT } from "./Chatbox"
import { AiOutlineCloseCircle } from "react-icons/ai";
import style from './Home.module.css'
import React, { useState } from 'react';


 
export function Home() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(true);
  };

  return (
    <div>
      {!showChat &&
     <a className={`${style.inicar} ${style.link}`} onClick={handleClick}>
       <span className={style.start}>Iniciar</span>
       <span className={style.tutor}>Tutor</span>
       <span className={style.personalizado}>Personalizado</span>
     </a>
     }
      {showChat && <ChatGPT />}
      {showChat && <button className={`${style.exit} ${style.icon}`} onClick={() => setShowChat(false)}> <AiOutlineCloseCircle /> </button>}
    </div>
  );
}
