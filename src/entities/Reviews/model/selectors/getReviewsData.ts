import { StateSchema } from '@/app/providers/StoreProvider';

export const getReviewsData = (state: StateSchema) => state.reviews?.data;
export const getReviewsAreLoading = (state: StateSchema) =>
  state.reviews?.isLoading;
export const getReviewsError = (state: StateSchema) => state.reviews?.error;
