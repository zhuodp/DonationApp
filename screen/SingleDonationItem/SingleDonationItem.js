import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/style/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import {ScrollView} from 'react-native-gesture-handler';
import style from './style';
import {Image, Text, View} from 'react-native';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInfo = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInfo = route.params.categoryInfo;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={style.imageContainer}>
          <Image
            source={{uri: donationItemInfo.image}}
            style={style.image}
            resizeMode="contain"
          />
        </View>
        <View style={style.badge}>
          <Badge title={categoryInfo.name} />
        </View>

        <View style={style.infoContainer}>
          <Header type={1} title={donationItemInfo.name} />
          <Text style={style.description}>{donationItemInfo.description}</Text>
        </View>
      </ScrollView>

      <View style={style.buttonContainer}>
        <Button
          onPress={() => {
            console.log('donate button pressed');
          }}
          title="Donate"
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
