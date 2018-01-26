import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from '../../styles/styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    );
  }
}
