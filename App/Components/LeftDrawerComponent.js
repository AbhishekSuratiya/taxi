import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const LeftDrawerComponent = props => {
  return <View style={styles.root} {...props} />;
};

export default LeftDrawerComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: MD2Colors.indigo50,
  },
});
