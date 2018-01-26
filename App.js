import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import TabNavigator from 'react-navigation/src/navigators/TabNavigator';

const AppRoot = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({ title: 'Home' }),
    },
    About: {
      screen: AboutScreen,
      navigationOptions: ({ navigation }) => ({ title: 'About' }),
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      },
    },
  },
);

export default class App extends React.Component {
  render() {
    return <AppRoot />;
  }
}
