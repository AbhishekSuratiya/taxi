import React from 'react';
import WhiteCardBackground from './WhiteCardBackground';
import H3R from '../Theme/Typography/H3R';
import H2B from '../Theme/Typography/H2B';

const LocationAddressCard = ({title, location, style, onPress}) => {
  return (
    <WhiteCardBackground style={[{marginTop: 16}, style]} onPress={onPress}>
      <H3R>{title}</H3R>
      <H2B style={{marginTop: 16}}>{location}</H2B>
    </WhiteCardBackground>
  );
};

export default LocationAddressCard;
