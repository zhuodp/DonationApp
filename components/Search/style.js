import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3F5F9',
    borderRadius: 15,
    borderColor: 'black',
    height: 40,
  },
  searchIcon: {
    marginStart: 10,
  },
  searchInput: {
    marginStart: 5,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 14,
    color: '#686C7A',
  },
});

export default style ;