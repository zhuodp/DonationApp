import React, {useState} from 'react';

import style from './style';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcom Back'} />
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
          <Button title={'Login'} />
        </View>

        <Pressable
          style={style.registration}
          onPress={() => {
            navigation.navigate(Routes.Registration);
          }}>
          <Header color={'#2979F2'} type={3} title={"Don't have an accout?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
