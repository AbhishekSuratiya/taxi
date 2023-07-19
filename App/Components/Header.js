import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Fonts from '../Theme/Fonts';
import Icon from 'react-native-vector-icons/Feather';

const Header = props => {
  const {backHidden, title, right, ...restProps} = props;
  return (
    <View style={styles.root}>
      {!backHidden ? (
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={restProps.navigation.goBack}>
          <Icon name="arrow-left" size={24} color={MD2Colors.white} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            restProps.navigation.getParent('LeftDrawer').openDrawer()
          }
          style={styles.leftIcon}>
          <Icon name="menu" size={24} color={MD2Colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {right ? (
        <TouchableOpacity
          onPress={() =>
            restProps.navigation.getParent('RightDrawer')?.openDrawer()
          }
          style={[styles.account, styles.rightIcon]}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: MD2Colors.indigo200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: Fonts.UbuntuBold,
    textAlign: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
  },
  account: {
    width: 32,
    height: 32,
    backgroundColor: MD2Colors.white,
    borderRadius: 36,
  },
});
