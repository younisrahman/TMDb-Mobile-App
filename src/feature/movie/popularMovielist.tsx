import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {MovieData} from '@dataType';
import {popular} from '../../api/movie';

interface stateProps {
  isLoading: boolean;
  movieList: MovieData[];
  totalPage: number;
  currentPage: number;
}
const initialState = {
  isLoading: true,
  movieList: [],
  totalPage: 10,
  currentPage: 1,
} as stateProps;

export const fetchPopularMovies = createAsyncThunk(
  'movie/fetchAllPopular',
  async (currentPage: number, thunkAPI) => {
    try {
      const response = await popular(currentPage);

      if (response.ok) {
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
const popularList = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movieList =
        state.currentPage === 1
          ? payload.results
          : [...state.movieList, ...payload.results];
      state.totalPage = payload.total_pages;
    });
  },
});

export const {incrementPage} = popularList.actions;

export default popularList.reducer;
