import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {MovieData} from '@dataType';
import {latest} from '../../api';

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

export const fetchLatestMovies = createAsyncThunk(
  'movie/fetchAll',
  async (currentPage: number, thunkAPI) => {
    try {
      const response = await latest(currentPage);

      if (response.ok) {
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const latestList = createSlice({
  name: 'latest',
  initialState,
  reducers: {
    incrementLatestPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLatestMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movieList =
        state.currentPage === 1
          ? payload.results
          : [...state.movieList, ...payload.results];
      state.totalPage = payload.total_pages;
    });
  },
});

export const {incrementLatestPage} = latestList.actions;

export default latestList.reducer;
