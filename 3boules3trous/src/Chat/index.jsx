import React, { useEffect, useState } from 'react';
import './Chat.css';

import Message from './Message';

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
  });

  function chatBody(selection) {
    const answer = selection.map((message) =>
        <Message
            pseudo={message.email.split("@",1)}
            message={message.name}
        />
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