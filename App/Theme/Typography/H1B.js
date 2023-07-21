import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../Fonts';

const H1B = props => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};
export default H1B;

const styles = StyleSheet.create({
  root: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: 24,
  },
});

// 24 - H1
// 18 - H2
// 16 - H3
// 12 - H4
// 8 - h5
