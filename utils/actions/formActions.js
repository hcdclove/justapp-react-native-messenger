// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import {
  validateEmail,
  validateLength,
  validatePassword,
  validateString
} from '../validationConstraints';

export const validateInput = (inputId, inputValue) => {
  if (inputId === 'firstName' || inputId === 'lastName') {
    return validateString(inputId, inputValue);
  } else if (inputId === 'email') {
    return validateEmail(inputId, inputValue);
  } else if (inputId === 'password') {
    return validatePassword(inputId, inputValue);
  } else if (inputId === 'about') {
    return validateLength(inputId, inputValue, 0, 150, true);
  } else if (inputId === 'chatName') {
    return validateLength(inputId, inputValue, 5, 50, false);
  }
};
