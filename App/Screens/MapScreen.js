import React, {useRef, useState} from 'react';
import {MD2Colors} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_API_KEY, WIDTH} from '../Utils/Constants';
import {showToast} from '../Utils/Utils';
import {View} from 'react-native';
import H3B from '../Theme/Typography/H3B';
import H3R from '../Theme/Typography/H3R';
import BlurryCardBackground from '../Components/BlurryCardBackground';
import H2B from '../Theme/Typography/H2B';

const Delta = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const MapScreen = props => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const mapRef = useRef();
  const {pickupCords, dropCords} = props.route.params;

  return (
    <View style={{flex: 1}}>
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
          onError={err => {
            showToast(true, err);
          }}
          onReady={res => {
            setDistance(res.distance);
            setTime(res.duration.toFixed(2));
            console.log(res, 'aaa');
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
      <View
        style={{
          width: WIDTH - 100,
          position: 'absolute',
          left: 50,
          bottom: 16,
        }}>
        <BlurryCardBackground>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <H2B>{'Distance'}</H2B>
              <H3R style={{marginTop: 16}}>{`${distance} KM`}</H3R>
            </View>
            <View>
              <H2B>{'Time'}</H2B>
              <H3R style={{marginTop: 16}}>{`${time} minutes`}</H3R>
            </View>
          </View>
        </BlurryCardBackground>
      </View>
    </View>
  );
};
export default MapScreen;
