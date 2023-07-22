import React, {useRef, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import BlurryCardBackground from '../Components/BlurryCardBackground';
import H1B from '../Theme/Typography/H1B';
import LocationPicker from '../Components/LocationPicker';
import BlackButton from '../Components/BlackButton';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {MD2Colors} from 'react-native-paper';
import {indigo500} from 'react-native-paper/src/styles/themes/v2/colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API_KEY} from '../Utils/Constants';

const HomeScreen = props => {
  const [isWhereToExpanded, setIsWhereToExpanded] = useState(false);
  const mapRef = useRef();
  const [cords, setCords] = useState({
    pickupCords: {
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropCords: {
      latitude: 30.7333,
      longitude: 76.7794,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: 'en',
        }}
      />
      <MapView
        ref={mapRef}
        style={{
          flex: 1,
        }}
        initialRegion={{
          ...cords.pickupCords,
        }}>
        <Marker coordinate={cords.pickupCords} />
        <Marker coordinate={cords.dropCords} />
        <MapViewDirections
          origin={cords.pickupCords}
          destination={cords.dropCords}
          // apikey={GOOGLE_MAP_API_KEY}
          strokeWidth={3}
          strokeColor={MD2Colors.indigo500}
          optimizeWaypoints={true}
          onReady={res => {
            mapRef.current.fitToCoordinates(res.coordinates, {
              edgePadding: {
                top: 20,
                bottom: 100,
                left: 64,
                right: 64,
              },
            });
          }}
        />
      </MapView>
    </>
  );
  return (
    <ImageBackground
      source={{uri: 'https://i.imgur.com/l7zTqzP.png'}}
      resizeMode={'cover'}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 64,
      }}>
      <BlurryCardBackground onPress={() => setIsWhereToExpanded(prev => !prev)}>
        {isWhereToExpanded ? (
          <H1B>Where to</H1B>
        ) : (
          <>
            <LocationPicker />
          </>
        )}
      </BlurryCardBackground>
      {/*<BlurryCardBackground>*/}
      {/*  <BlackButton title={'Ride Later'} style={{marginBottom: 16}} />*/}
      {/*  <BlackButton title={'Ride Now'} />*/}
      {/*</BlurryCardBackground>*/}
    </ImageBackground>
  );
};
export default HomeScreen;
