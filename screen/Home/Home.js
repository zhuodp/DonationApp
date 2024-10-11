import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Gavin'} type={1} />
      <Header title={'Gavin'} type={2} />
      <Header title={'Gavin'} type={3} />
      <Button
        title={'haja'}
        onPress={() => {
          console.log('just pressed it ');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
