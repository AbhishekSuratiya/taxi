import React from 'react';
import {GOOGLE_MAP_API_KEY} from '../Utils/Constants';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View} from 'react-native';
import Fonts from '../Theme/Fonts';
import {MD2Colors} from 'react-native-paper';
import H3R from '../Theme/Typography/H3R';

const GetLocationInput = ({onPress, placeholder}) => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <GooglePlacesAutocomplete
        // currentLocation={true}
        // currentLocationLabel={'Current Location'}
        placeholder={placeholder}
        fetchDetails={true}
        onPress={onPress}
        autoFocus={true}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: 'en',
        }}
        renderRow={data => {
          return (
            <H3R
              style={{
                marginTop: 16,
                alignSelf: 'flex-start',
                marginBottom: 16,
              }}>
              {data.description}
            </H3R>
          );
        }}
        textInputProps={{
          style: {
            backgroundColor: MD2Colors.deepPurple50,
            padding: 16,
            fontFamily: Fonts.UbuntuMedium,
            fontSize: 18,
            width: '100%',
            borderRadius: 8,
          },
        }}
      />
    </View>
  );
};
export default GetLocationInput;
