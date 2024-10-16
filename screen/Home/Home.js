import React, {useEffect, useState} from 'react';
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
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsCategoryLoading(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsCategoryLoading(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    } else {
      return items.slice(startIndex, endIndex);
    }
  };

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
            data={categoryList}
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
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isCategoryLoading) {
                return;
              }
              setIsCategoryLoading(true);
              const nextPageData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (nextPageData.length > 0) {
                setCategoryList(prevState => [...prevState, ...nextPageData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsCategoryLoading(false);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
