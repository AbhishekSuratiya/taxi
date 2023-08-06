import React, {useEffect, useState} from 'react';
import {ImageBackground, Modal, Platform, StyleSheet, View} from 'react-native';
import BlurryCardBackground from '../Components/BlurryCardBackground';
import LocationPicker from '../Components/LocationPicker';
import {MD2Colors, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {HEIGHT, WIDTH} from '../Utils/Constants';
import GetLocationInput from '../Navigations/GetLocationInput';
import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../Utils/Utils';
import H2B from '../Theme/Typography/H2B';
import ColoredButton from '../Components/ColoredButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

navigator.geolocation = require('react-native-geolocation-service');

const HomeScreen = props => {
  const [fromModalVisible, setFromModalVisible] = useState(false);
  const [toModalVisible, setToModalVisible] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [pickupCords, setPickupCords] = useState({});
  const [dropCords, setDropCords] = useState({});

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse').then(result => {
        if (result === 'granted') {
          console.log('Permission granted');
          // Geolocation.getCurrentPosition(
          //   position => {
          //     console.log('Current position:', position);
          //   },
          //   error => {
          //     console.log('Error getting location:', error);
          //   },
          //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          // );
        }
      });
    } else {
      requestLocationPermission();
    }
  }, []);
  const getPickupCoordinate = (data, detail) => {
    setPickupCords({
      latitude: detail.geometry.location.lat,
      longitude: detail.geometry.location.lng,
    });
    setFromModalVisible(false);
    setFromLocation(detail.formatted_address);
  };
  const getDropCoordinate = (data, detail) => {
    setDropCords({
      latitude: detail.geometry.location.lat,
      longitude: detail.geometry.location.lng,
    });
    setToModalVisible(false);
    setToLocation(detail.formatted_address);
  };

  return (
    <ImageBackground
      // source={{uri: 'https://i.imgur.com/l7zTqzP.png'}}
      source={{uri: null}}
      resizeMode={'cover'}
      style={{
        backgroundColor: MD2Colors.deepPurple100,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 64,
      }}>
      <BlurryCardBackground>
        <LocationPicker
          from={fromLocation}
          to={toLocation}
          onPressFrom={() => setFromModalVisible(true)}
          onPressTo={() => setToModalVisible(true)}
        />
        <ColoredButton
          onPress={() => {
            if (
              !Object.keys(pickupCords).length ||
              !Object.keys(dropCords.length)
            ) {
              alert('hi');
              return;
            }
            props.navigation.navigate('MapScreen', {
              pickupCords,
              dropCords,
            });
          }}
          title={"Let's Go"}
          icon={
            <MaterialCommunityIcons
              name="car-sports"
              size={32}
              color={MD2Colors.white}
              style={{marginTop: -8}}
            />
          }
        />
      </BlurryCardBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={fromModalVisible}
        onRequestClose={() => {
          setFromModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <Surface style={styles.modalView} elevation={2}>
            <H2B
              style={{
                marginTop: 16,
                alignSelf: 'flex-start',
                marginBottom: 16,
              }}>
              {'Search pickup location'}
            </H2B>
            <Icon
              style={styles.cross}
              name="cross"
              size={24}
              color={MD2Colors.red600}
              onPress={() => setFromModalVisible(!fromModalVisible)}
            />
            <GetLocationInput
              onPress={getPickupCoordinate}
              placeholder={'Search pickup location'}
            />
          </Surface>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={toModalVisible}
        onRequestClose={() => {
          setToModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <Surface style={styles.modalView} elevation={2}>
            <H2B
              style={{
                marginTop: 16,
                alignSelf: 'flex-start',
                marginBottom: 16,
              }}>
              {'Search drop location'}
            </H2B>
            <Icon
              style={styles.cross}
              name="cross"
              size={24}
              color={MD2Colors.red600}
              onPress={() => setToModalVisible(!toModalVisible)}
            />
            <GetLocationInput
              onPress={getDropCoordinate}
              placeholder={'Search pickup location'}
            />
          </Surface>
        </View>
      </Modal>
    </ImageBackground>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: WIDTH - 32,
    height: HEIGHT - 300,
  },
  cross: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
