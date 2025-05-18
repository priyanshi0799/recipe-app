import {SafeAreaView, FlatList, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Recipe.styles';
import {RecipeResponseType, RecipeType} from '../../network/model';
import RecipeTile from '../../components/RecipeTile';

type RecipeProps = {
  navigateToRecipeDetail: (item: RecipeType) => void;
  recipes: RecipeResponseType | undefined;
  toggleFavorite: (id: string) => void;
};

const Recipe = (props: RecipeProps) => {
  const {navigateToRecipeDetail, recipes, toggleFavorite} = props;

  const renderItem = ({item}: {item: RecipeType}) => (
    <RecipeTile
      item={item}
      navigateToRecipeDetail={navigateToRecipeDetail}
      toggleFavorite={toggleFavorite}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {recipes?.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>No Recipes Found</Text>
        </View>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

export default Recipe;
