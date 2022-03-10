import React from "react";
import Header from './Header'
import ChatList from './ChatList'
import MessageField from "./MessageField"
import PropTypes  from "prop-types"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../actions/chatActions";
import { add } from "../features/chats/chatsSlice";

const Layout = (props) => {

  const { chatId } = useParams()
  const { chats } = useSelector(item => item)
  const dispatch = useDispatch()
    
  // static propTypes = {
  //   chatId: PropTypes.number,
  // }
  // static defaultProps = {
  //   chatId: 1
  // }

  
  return(
    <div className="common">
      <Header chatId={+chatId}/>
      <div className="main">
        <ChatList chats={chats} addChat={() => dispatch(add(addChat()))}/>
        <MessageField 
          chatId={+chatId}
          chats={chats}
          />
      </div>
    </div>
  )
}

export default Layout