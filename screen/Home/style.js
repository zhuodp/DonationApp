import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    marginTop: 16,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helloText: {
    color: '#636776',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  username: {
    marginTop: 5,
    color: '#000000',
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  searchBox: {
    marginHorizontal: 18,
    marginTop: 15,
  },
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  bannerImageContainer: {
    marginHorizontal: 18,
    marginTop: 10,
  },
});

export default style;
