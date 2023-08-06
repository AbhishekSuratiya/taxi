import React from 'react';
import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import H1B from '../Theme/Typography/H1B';
import LocationAddressCard from './LocationAddressCard';

const LocationPicker = ({onPressFrom, onPressTo, from, to}) => {
  return (
    <>
      <H1B>Where to</H1B>
      <LocationAddressCard
        title={'From'}
        location={from}
        onPress={onPressFrom}
      />
      <LocationAddressCard
        title={'To'}
        location={to}
        onPress={onPressTo}
        style={{marginBottom: 16}}
      />
    </>
  );
};

export default LocationPicker;

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
});
