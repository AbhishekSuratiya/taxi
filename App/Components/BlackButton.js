import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import H2B from '../Theme/Typography/H2B';
import {MD2Colors} from 'react-native-paper';

const BlackButton = ({title, onPress, icon, style}) => {
  return (
    <TouchableOpacity style={[styles.root, style]}>
      <H2B style={{color: MD2Colors.white, marginRight: 8}}>{title}</H2B>
      {icon && icon}
    </TouchableOpacity>
  );
};

export default BlackButton;

const styles = StyleSheet.create({
  root: {
    backgroundColor: MD2Colors.grey800,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
