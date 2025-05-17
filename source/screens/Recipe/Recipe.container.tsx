import React from 'react';
import Recipe from './Recipe';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigationConstants';

const img =
  'https://pixabay.com/get/g090b43065c682b88dd55baebfe6b8856b9a313bd78e81545f4a6ff333c3ad4d4fc21cb3b388056291b350966344ed4842bd5fd9cc18dcdcf0361677ced6006a63d6655245123927dc3ee341e535ebbce_640.jpg';

export type RecipeType = {
  id: string;
  title: string;
  image: string;
  isFav?: boolean;
};

const RecipeContainer = () => {
  const navigation = useNavigation<any>();

  const recipes: Array<RecipeType> = [
    {
      id: '1',
      title: 'Spaghetti',
      image: img,
      isFav: true,
    },
    {
      id: '2',
      title: 'Avocado Toast',
      image: img,
    },
    {
      id: '3',
      title: 'Mango Smoothie',
      image: img,
      isFav: true,
    },
    {
      id: '4',
      title: 'Fruit Bowl',
      image: img,
    },
    {
      id: '5',
      title: 'Pancakes',
      image: img,
    },
  ];

  const navigateToRecipeDetail = () => {
    navigation.navigate(screenNames.RecipeDetails, {
      recipe: {
        title: 'Spaghetti Aglio e Olio',
        image: img,
        isFavorite: true,
        ingredients: [
          'Spaghetti',
          'Olive Oil',
          'Garlic',
          'Chili Flakes',
          'Parsley',
        ],
        steps: [
          'Boil the spaghetti.',
          'Heat oil and sauté garlic.',
          'Add chili flakes and cooked spaghetti.',
          'Mix well and top with parsley.',
        ],
      },
    });
  };

  return (
    <Recipe recipes={recipes} navigateToRecipeDetail={navigateToRecipeDetail} />
  );
};

export default RecipeContainer;
