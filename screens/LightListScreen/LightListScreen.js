import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Grid, Col } from 'native-base';
import styles from '../../styles/styles';

export default class LightListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Text style={styles.text}>Lights</Text>
          </Col>
          <Col />
        </Grid>
      </View>
    );
  }
}
