import React from 'react';
import {View, Text} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Fonts from '../Theme/Fonts';

const Header = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 40,
        backgroundColor: MD2Colors.indigo200,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontFamily: Fonts.UbuntuBold,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
