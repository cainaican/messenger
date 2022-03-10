import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Dinislam',
    age: 23,
    site: 'https://vk.com/musin_dinislam',
  },
  reducers:{
    changeInfo:{
      //change
    }
  }
})

export const { changeInfo } = profileSlice.actions

export default profileSlice.reducer