// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

function PageTitle(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  text: {
    fontSize: 28,
    color: colors.textColor,
    fontFamily: 'bold',
    letterSpacing: 0.3
  }
});

export default PageTitle;
