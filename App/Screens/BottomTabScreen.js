import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DetailsScreen, HomeScreen} from '../Containers/Navigation';
import Header from '../Components/Header';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const BottomTabScreen = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <Header title={'Tab Bottom Home'} />,
        }}
      />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
