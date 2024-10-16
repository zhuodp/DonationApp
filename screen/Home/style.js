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
    borderRadius: 25,
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
  categories: {
    marginLeft: 10,
  },
  categoryItem: {
    marginEnd: 10,
  },
  categoryHeader: {
    marginHorizontal: 18,
    marginTop: 15,
    marginBottom: 5,
  },
  donationItemContainer: {
    marginTop: 10,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '48%',
    marginBottom: 15,
  },
});

export default style;
