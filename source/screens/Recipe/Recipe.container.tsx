import {useCallback, useLayoutEffect} from 'react';
import Recipe from './Recipe';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigationConstants';
import {useQuery, useMutation} from '@tanstack/react-query';
import {getRecipe, markFavorite} from '../../network/api';
import {ActivityIndicator, ToastAndroid} from 'react-native';
import {RecipeType} from '../../network/model';
import axios from 'axios';
import HeaderRight from '../../components/HeaderRight';

interface RecipeContainerRouteParams {
  cuisineName: string;
}

const RecipeContainer = ({
  route,
}: {
  route: {params: RecipeContainerRouteParams};
}) => {
  const {cuisineName} = route.params;

  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight />,
    });
  }, [navigation]);

  const {data, isError, isLoading, refetch, isFetching, isSuccess} = useQuery({
    queryKey: ['recipe', cuisineName],
    queryFn: () => getRecipe(cuisineName),
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 0,
    placeholderData: undefined,
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
      isFav:
        data?.find((recipe: RecipeType) => recipe._id === id)?.isFavorite ===
        false
          ? false
          : true,
    });
  };

  const navigateToRecipeDetail = (recipe: RecipeType) =>
    navigation.navigate(screenNames.RecipeDetails, {
      recipe,
    });

  return (
    <Recipe
      recipes={data}
      navigateToRecipeDetail={navigateToRecipeDetail}
      toggleFavorite={toggleFavorite}
      isError={isError}
      refetch={refetch}
      isLoading={isLoading}
    />
  );
};

export default RecipeContainer;
