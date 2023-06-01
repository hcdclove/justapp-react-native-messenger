import 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import ChatListScreen from './screens/ChatListScreen';
import SettingScreen from './screens/SettingScreen';

SplashScreen.preventAutoHideAsync();

// Injecting my screens to the app here.
const Stack = createStackNavigator();
function myScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingScreen' component={SettingScreen} />
    </Stack.Navigator>
  );
}
// Play a Flash Screen while the app installs the custom fonts
export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const playFlashScreenWhileLoadingFonts = async () => {
      try {
        await Font.loadAsync({
          black: require('./assets/fonts/Roboto-Black.ttf'),
          regular: require('./assets/fonts/Roboto-Regular.ttf'),
          medium: require('./assets/fonts/Roboto-Medium.ttf'),
          bold: require('./assets/fonts/Roboto-Bold.ttf'),
          light: require('./assets/fonts/Roboto-Light.ttf'),
          thin: require('./assets/fonts/Roboto-Thin.ttf'),
          lightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
          mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
          boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
          thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
          blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf')
        });
      } catch (error) {
        console.log.error(error);
      } finally {
        console.log('Fonts loaded successfully');
        setAppIsLoaded(true);
      }
    };
    playFlashScreenWhileLoadingFonts();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    console.log('App is  not loaded');
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayout}>
      <SafeAreaView>
        <NavigationContainer>{myScreenStack()}</NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'regular'
  }
});
