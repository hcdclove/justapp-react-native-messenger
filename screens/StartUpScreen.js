// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../constants/colors';
import commonStyles from '../constants/commonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authenticate, setDidTryAutoLogin } from '../store/authSlice';
import { getUserData } from '../utils/actions/userActions';

const StartUpScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const storedAuthInfo = await AsyncStorage.getItem('userData');

      if (!storedAuthInfo) {
        dispatch(setDidTryAutoLogin());
        return;
      }

      const parsedData = JSON.parse(storedAuthInfo);
      const { token, userId, expiryDate: expiryDateString } = parsedData;

      const expiryDate = new Date(expiryDateString);
      if (expiryDate <= new Date() || !token || !userId) {
        dispatch(setDidTryAutoLogin());
        return;
      }

      const userData = await getUserData(userId);
      dispatch(authenticate({ token: token, userData }));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={commonStyles.center}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
};

export default StartUpScreen;
