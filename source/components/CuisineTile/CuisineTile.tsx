import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {styles} from './CuisineTile.styles';

type CuisineTileProps = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: (id: string) => void;
  id: string;
};
const CuisineTile = (props: CuisineTileProps) => {
  const {title, description, image, onPress, id} = props;

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CuisineTile;
