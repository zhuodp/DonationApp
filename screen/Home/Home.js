import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
};

export default Home;
