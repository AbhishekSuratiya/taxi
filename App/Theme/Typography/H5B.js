import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../Fonts';
import {MD2Colors} from 'react-native-paper';

const H5B = props => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};
export default H5B;

const styles = StyleSheet.create({
  root: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: 12,
    color: MD2Colors.black,
  },
});
