import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../Fonts';

const H2B = props => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};
export default H2B;

const styles = StyleSheet.create({
  root: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: 18,
  },
});
