import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Grid, Col } from 'native-base';
import styles from '../../styles/styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          // onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <TouchableOpacity
          style={{
            borderWidth: 5,
            borderColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 360,
          }}
        >
          {/* <Icon name={'chevron-right'} size={30} color="#01a699" /> */}
        </TouchableOpacity>
        <Text style={styles.text}>Light Switch</Text>
      </View>
    );
  }
}
