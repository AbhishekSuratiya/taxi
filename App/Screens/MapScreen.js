import React, {useRef} from 'react';
import {MD2Colors} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_API_KEY} from '../Utils/Constants';

const Delta = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const MapScreen = props => {
  const mapRef = useRef();
  const {pickupCords, dropCords} = props.route.params;

  return (
    <>
      <MapView
        ref={mapRef}
        style={{
          flex: 1,
        }}
        initialRegion={{
          ...pickupCords,
          ...Delta,
        }}>
        <Marker coordinate={{...pickupCords, ...Delta}} />
        <Marker coordinate={{...dropCords, ...Delta}} />
        <MapViewDirections
          origin={{...pickupCords, ...Delta}}
          destination={{...dropCords, ...Delta}}
          apikey={GOOGLE_MAP_API_KEY}
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
};
export default MapScreen;
