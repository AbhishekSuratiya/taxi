// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Components/Header';
import Fonts from '../Theme/Fonts';
import BottomTabScreen from '../Screens/BottomTabScreen';

export function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          props.navigation.navigate('Details');
        }}>
        Home Screen
      </Text>
    </View>
  );
}
export function DetailsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        Details Screen
      </Text>
      <Text
        onPress={() => {
          props.navigation.navigate('BottomTabScreen');
        }}>
        BottomTabScreen
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: true,
            header: () => <Header title={'Main Header Home'} />,
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
