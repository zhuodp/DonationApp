import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'HighLight',
    },
    {
      categoryId: 2,
      name: 'Popular',
    },
    {
      categoryId: 3,
      name: 'New Arrival',
    },
    {
      categoryId: 4,
      name: 'Recommended',
    },
    {
      categoryId: 5,
      name: 'Trending',
    },
    {
      categoryId: 6,
      name: 'Best Seller',
    },
    {
      categoryId: 7,
      name: 'Editor’s Choice',
    },
    {
      categoryId: 8,
      name: 'Limited Edition',
    },
    {
      categoryId: 9,
      name: 'Top Rated',
    },
    {
      categoryId: 10,
      name: 'Exclusive',
    },
  ],
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
