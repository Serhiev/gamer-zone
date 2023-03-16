import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    orderType: '-',
    orderBy: 'added',
    releaseDate: 2015,
    // platformTypes: 'PC',
    searchQuery: '',
  },
  reducers: {
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setReleaseDate: (state, action) => {
      state.releaseDate = action.payload;
    },
    setOrderType: (state, action) => {
      if (action.payload === 'ASC') {
        state.orderType = '';
      } else {
        state.orderType = '-';
      }
    },
    // setPlatformTypes: (state, action) => {
    //   state.platformTypes = action.payload;
    // },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setOrderBy, setReleaseDate, setOrderType, setPlatformTypes, setSearchQuery } =
  filterSlice.actions;

export default filterSlice.reducer;
