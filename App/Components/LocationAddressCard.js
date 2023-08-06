import React from 'react';
import WhiteCardBackground from './WhiteCardBackground';
import H3R from '../Theme/Typography/H3R';
import H3B from '../Theme/Typography/H3B';

const LocationAddressCard = ({title, location, style, onPress}) => {
  return (
    <WhiteCardBackground style={[{marginTop: 16}, style]} onPress={onPress}>
      <H3B>{title}</H3B>
      <H3R style={{marginTop: 16}}>{location}</H3R>
    </WhiteCardBackground>
  );
};

export default LocationAddressCard;
