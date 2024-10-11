import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[
        style.donateButton,
        props.isDisabled && style.donateButtonDisabled,
      ]}
      onPress={() => props.onPress()}>
      <Text style={style.donateButtonTitle}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
