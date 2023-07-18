import React from 'react';
import {View} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const Header = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 20,
        backgroundColor: MD2Colors.indigo200,
      }}
    />
  );
};

export default Header;
