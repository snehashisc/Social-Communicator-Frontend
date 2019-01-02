
import React, { Fragment } from 'react';
import SendMessageForm  from './SendMessageForm.js';
import ChatListComponent  from './ChatListComponent.js';

import './ChatViewComponent.scss';

class ChatViewComponent extends React.Component {
  constructor() {
    super()
    
  }
  render() {
    return (
      <Fragment>
        <div className="chat-view">
          <div className="chat-title-view">
            <span className="chat-title"> Chat</span>
            <span class="test"></span>
            <span class="glyphicon glyphicon-remove"></span>
          </div>
          <ChatListComponent />
          <SendMessageForm />
        </div>
      </Fragment>
    )
  }
}

export default ChatViewComponent;