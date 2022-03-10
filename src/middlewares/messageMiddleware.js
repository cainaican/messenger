import { useDispatch } from 'react-redux'
import { send } from '../features/message/messageSlice'
import { push } from '../features/chats/chatsSlice'
import { sendMessage } from '../actions/messageActions'
import { pushMessage } from '../actions/chatActions'

export default store => next => (action) => {
  console.log(action)
  if (action.payload.sender === 'You'){
    const { chatId, messageId } = action.payload
    console.log(messageId)
    setTimeout(() => { 
      store.dispatch(send(sendMessage('Не приставай ко мне, я робот!', 'Robot', chatId, messageId + 1)))
      store.dispatch(push(pushMessage(chatId, messageId + 1)))
    },
    1000)
  }
  console.log(store.getState())
  return next(action)
}