import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BlurryCardBackground = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default BlurryCardBackground;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '70%',
  },
});
