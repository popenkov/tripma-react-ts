import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ReviewType } from '../../types/type';

export const fetchReviewsData = createAsyncThunk<
  ReviewType[],
  any,
  ThunkConfig<string>
>('reviews/fetchReviewsData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<ReviewType[]>(`/reviews/`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
