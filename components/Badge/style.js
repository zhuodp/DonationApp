import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    justifyContent: 'center',
    borderRadius: 50,
  },
  inactiveBadge: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    paddingVertical: 4,
    color: 'white',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
