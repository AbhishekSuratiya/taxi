// In App.js in a new project

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Components/Header';
import BottomTabScreen from './BottomTabScreen';

export function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        Home Screen
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
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
