import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar';

export default class ChatList extends React.Component{
  static propTypes = {
    chatId: PropTypes.number
  }

  static defaultProps = {
    chatId: 1
  }

  render(){

    return(
      <div className="header__wrapper">
        <div className="header">
          <p>Messenger: Chat {this.props.chatId || ''}</p>
          <Link to={'/profile/'}>
            <Avatar alt="dinigoodini" src="./img/job.JPG" />
          </Link>
        </div>
      </div>
    )
  }
}