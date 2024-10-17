import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screen/Home/Home';
import React from 'react';
import SingleDonationItem from '../screen/SingleDonationItem/SingleDonationItem';
import Login from '../screen/Login/Login';
import Registration from '../screen/Registration/Registration';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
