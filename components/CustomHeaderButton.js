// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import colors from '../constants/colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color ?? colors.blue}
    />
  );
};

export default CustomHeaderButton;
