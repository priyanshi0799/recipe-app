import {useCallback} from 'react';
import {useQuery, useMutation} from '@tanstack/react-query';
import {getFavoriteRecipes, getRecipe, markFavorite} from '../../network/api';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Recipe from '../Recipe/Recipe';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {screenNames} from '../../navigationConstants';
import {RecipeType} from '../../network/model';

const FavoriteRecipesContainer = () => {
  const navigation = useNavigation<any>();

  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: ['favorite'],
    queryFn: () => getFavoriteRecipes(),
    retry: false,
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
      return () => {};
    }, [refetch]),
  );

  const {mutate} = useMutation({
    mutationFn: markFavorite,
    onSuccess: data => {
      ToastAndroid.show(data?.message, ToastAndroid.BOTTOM);
      refetch();
    },
    onError: (err: any) => {
      let errorMessage = 'Something went wrong';

      if (axios.isAxiosError(err)) {
        errorMessage =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message;
      }

      ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
    },
  });

  const toggleFavorite = (id: string) => {
    mutate({
      recipeId: id,
      isFav: true,
    });
  };

  const navigateToRecipeDetail = (recipe: RecipeType) => {
    navigation.navigate(screenNames.RecipeDetails, {
      recipe,
    });
  };

  return (
    <Recipe
      navigateToRecipeDetail={navigateToRecipeDetail}
      recipes={data}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default FavoriteRecipesContainer;
