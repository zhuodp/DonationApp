import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 15;
  const tabWidth = {
    width: horizontalPadding * 2 + width,
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
