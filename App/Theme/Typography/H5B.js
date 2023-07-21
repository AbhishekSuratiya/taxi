import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../Fonts';

const H5B = props => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};
export default H5B;

const styles = StyleSheet.create({
  root: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: 12,
  },
});
