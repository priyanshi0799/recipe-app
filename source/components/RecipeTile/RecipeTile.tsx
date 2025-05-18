import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './RecipeTile.styles';
import {RecipeType} from '../../network/model';
import Icon from 'react-native-vector-icons/FontAwesome';

type RecipeTileProps = {
  item: RecipeType;
  navigateToRecipeDetail: (item: RecipeType) => void;
  toggleFavorite: (id: string) => void;
};

const RecipeTile = (props: RecipeTileProps) => {
  const {item, navigateToRecipeDetail, toggleFavorite} = props;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToRecipeDetail(item)}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => toggleFavorite(item._id)}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon
            name="heart"
            size={20}
            color={item?.isFavorite ? 'red' : '#ccc'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeTile;
