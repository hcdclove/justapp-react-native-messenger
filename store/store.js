// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import chatSlice from './chatSlice';
import messagesSlice from './messagesSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    chats: chatSlice,
    messages: messagesSlice
  }
});
