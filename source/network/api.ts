import axios from 'axios';
import {
  BASE_URL,
  GET_CUISINE,
  GET_FAVORITE_RECIPES,
  GET_RECIPE,
  GET_USER_DETAILS,
  LOGIN,
  LOGOUT,
  MARK_FAVORITE,
  SIGNUP,
} from './endpoint';
import {
  CuisineResponseType,
  MarkFavoriteRequestType,
  RecipeResponseType,
  SignupRequestType,
} from './model';

export const signupUser = async (request: SignupRequestType) => {
  const {number, password, otp} = request;

  try {
    const response = await axios.post(
      `${BASE_URL}${SIGNUP}`,
      {
        phoneNo: number,
        password,
        otp,
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signinUser = async (request: SignupRequestType) => {
  const {number, password, otp} = request;

  try {
    const response = await axios.post(
      `${BASE_URL}${LOGIN}`,
      {
        phoneNo: number,
        password,
        otp,
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}${LOGOUT}`,

      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_USER_DETAILS}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCuisine = async (): Promise<CuisineResponseType> => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_CUISINE}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecipe = async (param: string): Promise<RecipeResponseType> => {
  try {
    const response = await axios.get(
      `${BASE_URL}${GET_RECIPE}?cusine=${param}`,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const markFavorite = async (params: MarkFavoriteRequestType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${MARK_FAVORITE}/${params.recipeId}`,
      {
        isFav: params.isFav,
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFavoriteRecipes = async (): Promise<RecipeResponseType> => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_FAVORITE_RECIPES}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
