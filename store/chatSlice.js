// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    chatsData: {}
  },
  reducers: {
    setChatsData: (state, action) => {
      state.chatsData = { ...action.payload.chatsData };
    }
  }
});
export const setChatsData = chatSlice.actions.setChatsData;
export default chatSlice.reducer;
