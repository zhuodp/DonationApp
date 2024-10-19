import React, {useState} from 'react';

import style from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome !'} />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            lable={'First & Last Name'}
            placeHolder={'Dapei Zhuo'}
            onChangeText={val => {
              setFullname(val);
            }}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            lable={'Email'}
            secureTextEntry={false}
            placeHolder={'Enter your email'}
            onChangeText={val => {
              setEmail(val);
            }}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            lable={'Password'}
            secureTextEntry={true}
            placeHolder={'******'}
            onChangeText={val => {
              setPassword(val);
            }}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Registration'}
            onPress={async () => await createUser(fullname, email, password)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
