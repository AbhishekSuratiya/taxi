import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import LeftDrawerComponent from '../Components/LeftDrawerComponent';
import AccountScreen from '../Screens/AccountScreen';
import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

export const renderHeader = props => {
  return (
    <Header
      backHidden={true}
      title={props.route.name}
      right={true}
      {...props}
    />
  );
};

const RightDrawerNavigation = props => {
  return (
    <Drawer.Navigator
      id="RightDrawer"
      drawerContent={LeftDrawerComponent}
      initialRouteName={'Home'}
      screenOptions={{
        header: renderHeader,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
};

export default RightDrawerNavigation;
