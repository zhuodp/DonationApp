import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import Search from '../../components/Search/Search';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import style from './style';
import {resetToInitialState} from '../../redux/reducers/User';
import {
  resetCategories,
  updateSelectedCategoryId,
} from '../../redux/reducers/Categories';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());

  const categories = useSelector(state => state.categories);
  console.log(categories);
  // console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.helloText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'cover'}
          />
        </View>
        <View style={style.searchBox}>
          <Search
            onSearch={value => {
              console.log(value);
            }}
          />
        </View>
        <Pressable style={style.bannerImageContainer}>
          <Image
            style={style.bannerImage}
            source={{
              uri: 'https://upload-images.jianshu.io/upload_images/5809200-c12521fbde6c705b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            }}
            resizeMode="cover"
          />
        </Pressable>

        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>

        <View style={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => {
              return (
                <View style={style.categoryItem} key={item.categoryId}>
                  <Tab
                    tabId={item.categoryId}
                    title={item.name}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                    onPress={value => {
                      dispatch(updateSelectedCategoryId(value));
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
