import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../Fonts';

const H4B = props => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};
export default H4B;

const styles = StyleSheet.create({
  root: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: 12,
  },
});
