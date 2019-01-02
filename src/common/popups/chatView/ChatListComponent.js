
import React, { Fragment } from 'react';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?",
    id:1
  },
  {
    senderId: "janedoe",
    text: "who'll win?",
    id:2
  }
]


class ChatListComponent extends React.Component {
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }
  render() {
    return (
      <Fragment>
        <ul className="message-list">                 
          {this.state.messages.map(message => {
            return (
             <li key={message.id}>
               <div>
                 {message.senderId}
               </div>
               <div>
                 {message.text}
               </div>
             </li>
           )
         })}
       </ul>
     </Fragment>
    )
  }
}

export default ChatListComponent;