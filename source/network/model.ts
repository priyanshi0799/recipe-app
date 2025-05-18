export type SignupRequestType = {
  number: string;
  password: string;
  otp: string;
};

export type CuisineType = {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
};

export type CuisineResponseType = Array<CuisineType>;

export type RecipeType = {
  _id: string;
  name: string;
  imageUrl: string;
  ingredients: Array<string>;
  steps: Array<string>;
  cuisine: string;
  isFavorite: boolean;
};

export type RecipeResponseType = Array<RecipeType>;

export type MarkFavoriteRequestType = {
  recipeId: string;
  isFav: boolean;
};
