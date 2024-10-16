import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screen/Home/Home';
import React from 'react';
import SingleDonationItem from '../screen/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
