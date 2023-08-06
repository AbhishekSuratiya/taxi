import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BlurryCardBackground = ({children, onPress}) => {
  return (
    <View style={styles.root} onPress={onPress} disabled={!onPress}>
      {children}
    </View>
  );
};

export default BlurryCardBackground;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 32,
    justifyContent: 'center',
    minWidth: '70%',
  },
});
