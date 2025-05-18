import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HeaderRight.styles';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigationConstants';

const HeaderRight = () => {
  const navigation = useNavigation<any>();

  const onPress = () => navigation.navigate(screenNames.FavoriteRecipes);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>View Favorites</Text>
    </TouchableOpacity>
  );
};

export default HeaderRight;
