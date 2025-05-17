import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './Recipe.styles';
import {RecipeType} from './Recipe.container';
import {favIconPath} from '../../utils';

type RecipeProps = {
  navigateToRecipeDetail: () => void;
  recipes: Array<RecipeType>;
};
const Recipe = (props: RecipeProps) => {
  const {navigateToRecipeDetail, recipes} = props;

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.card} onPress={navigateToRecipeDetail}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        {item?.isFav ? (
          <Image source={favIconPath} style={styles.heartIcon} />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Recipe;
