import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screen/Home/Home';
import React from 'react';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
