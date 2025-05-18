import {useLayoutEffect} from 'react';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getCuisine, logoutUser} from '../../network/api';
import {
  ActivityIndicator,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import {screenNames} from '../../navigationConstants';
import {styles} from './Home.styles';

const HomeContainer = () => {
  const navigation = useNavigation<any>();

  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: ['cuisine'],
    queryFn: getCuisine,
    retry: false,
  });

  const {mutate} = useMutation({
    mutationFn: logoutUser,
    onSuccess: data => {
      navigation.reset({
        index: 0,
        routes: [{name: screenNames.Login}],
      });
    },
    onError: (err: any) => {
      ToastAndroid.show('Something went wrong', ToastAndroid.BOTTOM);
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => mutate()}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleCardPress = (id: string) =>
    navigation.navigate('Recipe', {cuisineName: id});

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Home
      isError={isError}
      data={data}
      handleCardPress={handleCardPress}
      refetch={refetch}
    />
  );
};

export default HomeContainer;
