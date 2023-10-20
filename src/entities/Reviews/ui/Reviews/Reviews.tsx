import { FC, useEffect } from 'react';
import { fetchReviewsData } from '../../model/services/fetchReviewsData/fetchReviewsData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getReviewsAreLoading,
  getReviewsData,
  getReviewsError,
} from '../../model/selectors/getReviewsData';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton';
import { reviewsReducer } from '../../model/slice/reviewsSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReviewList } from '../ReviewList/ReviewList';

const reducers: ReducersList = {
  reviews: reviewsReducer,
};

export const Reviews: FC = () => {
  const dispatch = useAppDispatch();
  const reviewsData = useSelector(getReviewsData);
  const isLoading = useSelector(getReviewsAreLoading);
  const error = useSelector(getReviewsError);

  useEffect(() => {
    dispatch(fetchReviewsData('_'));
    console.log('reviewsData', reviewsData);
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={'skeleton'}
          width={200}
          height={200}
          border="50%"
        />
      </>
    );
  } else if (error) {
    content = <h1>ошибка</h1>;
  } else {
    content = <ReviewList data={reviewsData} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div>{content}</div>
    </DynamicModuleLoader>
  );
};
