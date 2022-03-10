import React from "react";
import {List, ListItem} from 'material-ui/List';
import { Link, useParams } from "react-router-dom";
import ContentSend from 'material-ui/svg-icons/content/send';
import { FloatingActionButton } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';

const ChatList = (props) => {

  const chatLists = Object.values(props.chats).map( (chat, index) => {
    return(
      <Link key={index + 1} to={`/chat/${index + 1}` }>
        <ListItem key={index + 1} primaryText={chat.title} leftIcon={<ContentSend />} />
      </Link>
    )
  })

  return(
    <div className="chats-options">
      <List>
        {chatLists}
      </List>
      <FloatingActionButton
        style={{color: '#000', width: '55px'}}
        onClick={props.addChat}
      >
        <AddIcon/>
      </FloatingActionButton>
    </div>
  )
}

export default ChatList