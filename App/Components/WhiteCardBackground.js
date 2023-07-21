import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const WhiteCardBackground = ({children, onPress, style}) => {
  return (
    <View style={[styles.root, style]} onPress={onPress}>
      {children}
    </View>
  );
};

export default WhiteCardBackground;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: MD2Colors.white,
    borderRadius: 16,
    justifyContent: 'center',
    minWidth: '70%',
  },
});
