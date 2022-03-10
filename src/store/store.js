import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/message/messageSlice";
import chatReducer from '../features/chats/chatsSlice'
import profileReducer from '../features/profile/profileSlice'
import { applyMiddleware } from "redux";
import middlewares from '../middlewares/index'
import messageMiddleware from "../middlewares/messageMiddleware";

export default configureStore({
  reducer: {
    messages: messageReducer,
    chats: chatReducer,
    profile: profileReducer,
  },
  middleware: [messageMiddleware],
})
