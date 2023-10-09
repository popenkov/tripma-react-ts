export enum AppRoutes {
  MAIN = 'main',
  FLIGHTS = 'flights',
  HOTELS = 'hotels',
  PACKAGES = 'packages',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',

  // should be last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteFlights = () => '/flights';
export const getRouteHotels = () => '/hotels';
export const getRoutePackages = () => '/packages';
export const getRouteSignIn = () => '/sign-in';
export const getRouteSignUp = () => '/sign-up';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteFlights()]: AppRoutes.FLIGHTS,
  [getRouteHotels()]: AppRoutes.HOTELS,
  [getRoutePackages()]: AppRoutes.PACKAGES,
  [getRouteSignIn()]: AppRoutes.SIGN_IN,
  [getRouteSignUp()]: AppRoutes.SIGN_UP,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
};
