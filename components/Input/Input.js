import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import style from './style';

const Input = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{props.lable}</Text>
      <TextInput
        placeholder={props.placeHolder ? props.placeHolder : null}
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: val => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  lable: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
