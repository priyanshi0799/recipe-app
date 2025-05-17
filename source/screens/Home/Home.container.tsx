import React from 'react';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';

const HomeContainer = () => {
  const navigation = useNavigation<any>();

  const handleCardPress = (id: string) => {
    navigation.navigate('Recipe', {id});
  };

  return <Home handleCardPress={handleCardPress} />;
};

export default HomeContainer;
