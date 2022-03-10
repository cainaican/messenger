import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    0: {text: 'начните диалог', sender: ''},
    1: {text: 'Hello', sender: 'Robot'},
    2: {text: 'How are you?', sender: 'Robot'},
    3: {text: 'Ola', sender: 'Robot'},
    4: {text: 'Привет', sender: 'Robot'},
    5: {text: 'Как ты?', sender: 'Robot'},
  },
  reducers: {
    send: (state, action) => {
      return({
        ...state,
        [action.payload.messageId]: {text: action.payload.message, sender: action.payload.sender}
      })
    }
  }
})

export const { send } = messageSlice.actions

export default messageSlice.reducer