import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: '',
        message: '',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Android location granted');
    } else {
      console.log('Android location revoked');
    }
  } catch (err) {
    console.warn(err);
  }
};
