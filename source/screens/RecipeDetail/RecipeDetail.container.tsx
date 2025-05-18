import React, {useLayoutEffect, useState} from 'react';
import RecipeDetail from './RecipeDetail';
import {RecipeType} from '../../network/model';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {markFavorite} from '../../network/api';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderRight from '../../components/HeaderRight';

interface RecipeDetailContainerRouteParams {
  recipe: RecipeType;
}

const RecipeDetailContainer = ({
  route,
}: {
  route: {params: RecipeDetailContainerRouteParams};
}) => {
  const {recipe} = route.params;
  const [isFavorite, setIsFavorite] = useState<boolean>(recipe?.isFavorite);
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight />,
    });
  }, [navigation]);

  const {mutate} = useMutation({
    mutationFn: markFavorite,
    onSuccess: data => {
      setIsFavorite(!isFavorite);
      ToastAndroid.show(data?.message, ToastAndroid.BOTTOM);
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

  const toggleFavorite = (id: string) =>
    mutate({
      recipeId: id,
      isFav: isFavorite ? true : false,
    });

  return (
    <RecipeDetail
      recipe={recipe}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
    />
  );
};

export default RecipeDetailContainer;
