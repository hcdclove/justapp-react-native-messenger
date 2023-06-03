// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import AuthScreen from '../screens/AuthScreen';
import { useSelector } from 'react-redux';
import StartUpScreen from '../screens/StartUpScreen';

const AppNavigator = (props) => {
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ''
  );
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
