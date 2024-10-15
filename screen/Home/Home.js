import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useSelector} from 'react-redux';
import Header from '../../components/Header/Header';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
      <Header type={1} title={user.firstName + user.lastName} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 15,
        }}>
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
