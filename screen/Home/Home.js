import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import { updateFirstName } from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
      <Header type={1} title={user.firstName + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'D'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
