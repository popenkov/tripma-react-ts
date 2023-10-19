export type ReviewType = {
  id: string;
  author: ReviewAuthorType;
  rating: number;
  text: string;
};

export type ReviewAuthorType = {
  avatar: string;
  name: string;
  city: string;
  date: string;
};

export type ReviewsSchemaType = {
  isLoading: boolean;
  error?: string;
  data?: ReviewType[];
};
