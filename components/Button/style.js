import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  donateButton: {
    backgroundColor: '#2979F2',
    paddingVertical: 16,
    justifyContent: 'center',
    borderRadius: 50,
  },
  donateButtonDisabled: {
    opacity: 0.5,
  },
  donateButtonTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  },
});

export default style;
