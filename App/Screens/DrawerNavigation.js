import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DetailsScreen, HomeScreen} from '../Containers/Navigation';
const Drawer = createDrawerNavigator();

const DrawerNavigation = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
