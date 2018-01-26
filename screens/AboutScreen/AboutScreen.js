import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from '../../styles/styles';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Not much to say about this app other than it's awesome.
        </Text>
      </View>
    );
  }
}
