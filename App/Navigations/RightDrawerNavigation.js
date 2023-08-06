import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import LeftDrawerComponent from '../Components/LeftDrawerComponent';
import MapScreen from '../Screens/MapScreen';
import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

const routesWithBack = ['MapScreen'];
const routesWithProfile = ['Home'];

export const renderHeader = props => {
  const showBack = routesWithBack.includes(props.route.name);
  const showRight = routesWithProfile.includes(props.route.name);
  return (
    <Header
      backHidden={!showBack}
      title={props.route.name}
      right={showRight}
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
      <Drawer.Screen name="MapScreen" component={MapScreen} />
    </Drawer.Navigator>
  );
};

export default RightDrawerNavigation;
