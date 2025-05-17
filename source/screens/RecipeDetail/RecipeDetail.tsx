import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './RecipeDetail.styles';
import {favIconPath} from '../../utils';

interface RecipeDetailRouteParams {
  recipe: {
    image: string;
    title: string;
    ingredients: string[];
    steps: string[];
  };
}

export default function RecipeDetail({
  route,
}: {
  route: {params: RecipeDetailRouteParams};
}) {
  const {recipe} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: recipe.image}} style={styles.image} />
      </View>

      <View style={styles.flex}>
        <Text style={styles.title}>{recipe.title}</Text>
        <TouchableOpacity style={styles.heartIcon}>
          <Image source={favIconPath} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>🧂 Ingredients</Text>
      {recipe.ingredients.map((item, index) => (
        <Text key={index} style={styles.item}>
          • {item}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>👨‍🍳 Steps</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.item}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
}
