import React from 'react';
import {View} from 'react-native';
import H1B from '../Theme/Typography/H1B';
import LocationAddressCard from './LocationAddressCard';

const LocationPicker = ({onPressFrom, onPressTo, from, to}) => {
  return (
    <View style={{width: '90%'}}>
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
    </View>
  );
};

export default LocationPicker;
