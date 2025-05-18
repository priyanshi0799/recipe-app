import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './RecipeDetail.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RecipeType} from '../../network/model';

type RecipeDetailProps = {
  recipe: RecipeType;
  toggleFavorite: (id: string) => void;
  isFavorite: boolean;
};

export default function RecipeDetail(props: RecipeDetailProps) {
  const {recipe, isFavorite, toggleFavorite} = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: recipe.imageUrl}} style={styles.image} />
      </View>

      <View style={styles.flex}>
        <Text style={styles.title}>{recipe.name}</Text>
        <TouchableOpacity
          style={styles.heartIcon}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => toggleFavorite(recipe._id)}>
          <Icon name="heart" size={20} color={isFavorite ? 'red' : '#ccc'} />
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
