import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Home.styles';
import CuisineTile from '../../components/CuisineTile';

type HomeProps = {
  handleCardPress: (id: string) => void;
};
const Home = (props: HomeProps) => {
  const {handleCardPress} = props;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>What are you craving for today?</Text>
      <View style={styles.flex}>
        <CuisineTile
          onPress={handleCardPress}
          description="A vibrant blend of spices, curries, and tandoori delights, balancing sweet, savory, and fiery flavors. Staples: biryani, naan, and masala chai."
          id="1"
          title="Indian"
          image={require('../../../assets/indian.jpg')}
        />
        <CuisineTile
          onPress={() => {}}
          description="Bold stir-fries, dumplings, and aromatic sauces with a harmony of sweet, sour, and umami. Think Kung Pao chicken and dim sum."
          id="2"
          title="Chinese"
          image={require('../../../assets/chinese.jpg')}
        />
        <CuisineTile
          onPress={() => {}}
          description="Elegant sauces, buttery pastries, and refined techniques. From coq au vin to croissants, it’s a culinary art form."
          id="3"
          title="French"
          image={require('../../../assets/french.jpg')}
        />
        <CuisineTile
          onPress={() => {}}
          description="Rustic pastas, wood-fired pizzas, and rich risottos, celebrating fresh herbs, olive oil, and regional simplicity."
          id="4"
          title="Italian"
          image={require('../../../assets/italian.jpg')}
        />
        <CuisineTile
          onPress={() => {}}
          description="Fresh, sun-kissed flavors—olive oil, grilled meats, hummus, and feta. Light, healthy, and rich in herbs."
          id="5"
          title="Mediterranean"
          image={require('../../../assets/mediterranean.jpg')}
        />
      </View>
      <View style={{height: 40}} />
    </ScrollView>
  );
};

export default Home;
