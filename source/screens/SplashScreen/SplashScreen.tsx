import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getUserDetails} from '../../network/api';
import {screenNames} from '../../navigationConstants';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  const {isError, isSuccess} = useQuery({
    queryKey: ['userDetails'],
    queryFn: getUserDetails,
    retry: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSuccess)
        navigation.reset({
          index: 0,
          routes: [{name: screenNames.Home}],
        });
      else navigation.replace(screenNames.Login);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSuccess, isError]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your Recipe World</Text>
      <LottieView
        source={require('../../../assets/animations/splash.json')}
        autoPlay
        loop={true}
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 500,
    height: 500,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});

export default SplashScreen;
