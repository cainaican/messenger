import React, { useEffect, useState } from "react";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../components/Message/';
import '../styles/styles.css'
import { send } from "../features/message/messageSlice";
import { useSelector, useDispatch } from 'react-redux'
import {sendMessage} from '../actions/messageActions'
import { pushMessage } from "../actions/chatActions";
import { push } from "../features/chats/chatsSlice";

const MessageField = props => {

  const textInput = React.createRef()
  const { chats, chatId } = props
  const [ input, setInput ] = useState('')
  const { messages } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    textInput.current.focus()
  })
 
  
  const handleSendMessage = (message, sender) => {
    if (input.length > 0 || sender === 'Robot') {
      const messageId = Object.keys(messages).length;
      dispatch(send(sendMessage(message, sender, chatId, messageId)));
      dispatch(push(pushMessage(chatId, messageId)));
    }

    if (sender === 'You') {
      setInput('');
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      handleSendMessage(input, 'You');
    }
  };
    
  const messageElements = chatId ? chats[chatId].messageList.map((messageId, index) => (
    <Message key={messageId} text = {messages[messageId].text} sender={messages[messageId].sender} />
  )) : '  your chat will shown up here'

  return (    
    <div id="main" className="main__messageField" >
      <div className="message-field">
        {messageElements}
      </div>
      <div className="message-type">
        <TextField 
          type="text" name="input" id="1" 
          style={{color: '#232323', width: '90%'}}
          hintText="прям тут"
          floatingLabelText="Введите сообщение"
          ref={textInput}
          value={input}
          onChange={ (e) => handleChange(e)}
          onKeyUp={handleKeyUp}
        />
        <FloatingActionButton
          style={ {color: '#000'} }
          onClick={ () => handleSendMessage(input, 'You')}
        >
          <SendIcon/>
        </FloatingActionButton>
      </div>
    </div>
  )
}

export default MessageField