import React from 'react';
import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import H1B from '../Theme/Typography/H1B';
import LocationAddressCard from './LocationAddressCard';
import ColoredButton from './ColoredButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationPicker = props => {
  return (
    <>
      <H1B>Where to</H1B>
      <LocationAddressCard title={'From'} location={'Delhi'} />
      <LocationAddressCard
        title={'To'}
        location={'Uttrakhand'}
        style={{marginBottom: 16}}
      />
      <ColoredButton
        onPress={() => {}}
        title={"Let's Go"}
        icon={
          <Icon
            name="car-sports"
            size={32}
            color={MD2Colors.white}
            style={{marginTop: -8}}
          />
        }
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
