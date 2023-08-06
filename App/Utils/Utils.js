import {PermissionsAndroid} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {MD2Colors} from 'react-native-paper';

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

export const showToast = (isError, message) => {
  showMessage({
    message: isError ? 'Error!' : 'Success',
    description: message,
    type: 'default',
    backgroundColor: isError ? MD2Colors.red300 : MD2Colors.deepPurple300,
    color: MD2Colors.white,
    duration: 2000,
  });
};
