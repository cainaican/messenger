import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    1: {title: 'Chat 1', messageList: [1]},
    2: {title: 'Chat 2', messageList: [2]},
    3: {title: 'Chat 3', messageList: [3]},
    4: {title: 'Chat 4', messageList: [4]},
    5: {title: 'Chat 5', messageList: [5]},
  },
  reducers:{
    add: (state) => {
      return({
        ...state,
        [Object.keys(state).length + 1]: { title: `Chat ${Object.keys(state).length + 1}`, messageList: [0]}
      })
    },
    push: (state, action) => {
      const { chatId, messageId } = action.payload
      return (state, {
        ...state,
        [chatId]: {title: state[chatId].title, messageList: [...state[chatId].messageList, messageId]} 
      })
    }
  }
})

export const { add, push } = chatSlice.actions

export default chatSlice.reducer