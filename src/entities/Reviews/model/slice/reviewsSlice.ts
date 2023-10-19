import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchReviewsData } from '../services/fetchReviewsData/fetchReviewsData';
import { ReviewsSchemaType, ReviewType } from '../types/type';

const initialState: ReviewsSchemaType = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReviewsData.fulfilled,
        (state, action: PayloadAction<ReviewType[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchReviewsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: reviewsActions } = reviewsSlice;
export const { reducer: reviewsReducer } = reviewsSlice;
