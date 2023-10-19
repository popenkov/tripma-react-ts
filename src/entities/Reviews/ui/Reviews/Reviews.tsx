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

export const Reviews: FC = () => {
  const dispatch = useAppDispatch();
  const reviewsData = useSelector(getReviewsData);
  const isLoading = useSelector(getReviewsAreLoading);
  const error = useSelector(getReviewsError);

  useEffect(async () => {
    const result = await dispatch(fetchReviewsData('_'));
    console.log('result', result);
  }, [dispatch]);

  console.log('reviewsData', reviewsData);
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
    content = <h1>reviewContent</h1>;
  }

  return <div>{content}</div>;
};
