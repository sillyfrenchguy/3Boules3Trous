import React from 'react';

const Message = (props) => (
  <div className="singleMessage">
    <p>
        <b>{props.pseudo} : </b>{props.message}
    </p>
  </div>
);

export default Message;
