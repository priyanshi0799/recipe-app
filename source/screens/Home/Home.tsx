import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './Home.styles';
import CuisineTile from '../../components/CuisineTile';
import {CuisineResponseType, CuisineType} from '../../network/model';
import Error from '../../components/Error';

type HomeProps = {
  handleCardPress: (id: string) => void;
  data: CuisineResponseType | undefined;
  refetch: () => void;
  isError?: boolean;
};
const Home = (props: HomeProps) => {
  const {handleCardPress, data, isError, refetch} = props;

  const renderItem = ({item}: {item: CuisineType}) => (
    <CuisineTile
      onPress={handleCardPress}
      description={item.description}
      id={item.name}
      title={item.name}
      image={item.imageUrl}
    />
  );

  return isError ? (
    <Error refetch={refetch} />
  ) : (
    data && data?.length && (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={styles.container}
        ListHeaderComponent={
          <Text style={styles.heading}>What are you craving for today?</Text>
        }
        ListFooterComponent={<View style={{height: 40}} />}
      />
    )
  );
};

export default Home;
