import React, { useEffect, useState, useRef } from 'react';
import './Chat.css';

import Message from './Message';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [nbMessage, changeNumberMessage] = useState(1);


    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }


    const changeMessage = () => {
        let random = getRandomInt(1, 6); 
        if (random >= 5){
            return changeNumberMessage(nbMessage => nbMessage + 1)
        }
        else {
            return changeNumberMessage(nbMessage => nbMessage)
            
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
        changeMessage();
        }, 1000);
        return () => clearInterval(interval);
    }, []);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
  });

  
  const chatBody = (selection) => {
    
    const answer = selection.map((message, index) => 
      
        index <= nbMessage ?
          <Message
              pseudo={message.email.split("@",1)}
              message={message.name}
          /> 
        : undefined
    );
    

    return answer;
    
  }

  return (
    <div id="chat">
      <h2>Chat</h2>
      <div id="chatBox"> 
        {
          messages.length > 0 && (
              <div>
                  {chatBody(messages)}
              </div>

          )
        }
      </div>
    </div>
    
  );
};
export default Chat;