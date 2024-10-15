import React from 'react';
import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
      <View style={{flexDirection:'row', justifyContent:'space-around', marginHorizontal: 15}}>
        <SingleDonationItem
          uri={
            'https://fastly.picsum.photos/id/1015/200/200.jpg?hmac=CZwBryoFVJo_ic1ivVDBJGVm0MZDhNMiO5B9KzOMY_Y'
          }
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
          price={24}
        />
        <SingleDonationItem
          uri={
            'https://fastly.picsum.photos/id/1015/200/200.jpg?hmac=CZwBryoFVJo_ic1ivVDBJGVm0MZDhNMiO5B9KzOMY_Y'
          }
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
          price={24}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
