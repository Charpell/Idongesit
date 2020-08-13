import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation'
import { useFonts } from 'expo-font'
console.disableYellowBox = true

export default function App() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require('./assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-Light": require('./assets/fonts/Montserrat-Light.ttf'),
    "Montserrat-Medium": require('./assets/fonts/Montserrat-Medium.ttf'),
    "Montserrat-Regular": require('./assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-SemiBold": require('./assets/fonts/Montserrat-SemiBold.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
