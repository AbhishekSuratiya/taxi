import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LeftDrawerComponent from '../Components/LeftDrawerComponent';
import RightDrawerNavigation from './RightDrawerNavigation';

const Drawer = createDrawerNavigator();

const LeftDrawerNavigation = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        id="LeftDrawer"
        drawerContent={LeftDrawerComponent}
        screenOptions={{
          drawerPosition: 'left',
          headerShown: false,
        }}>
        <Drawer.Screen
          name="RightDrawerNavigation"
          component={RightDrawerNavigation}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default LeftDrawerNavigation;
