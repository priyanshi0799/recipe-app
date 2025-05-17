import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './source/screens/SplashScreen';
import Home from './source/screens/Home';
import {enableScreens} from 'react-native-screens';
import Login from './source/screens/Login';
import Otp from './source/screens/Otp';
import Recipe from './source/screens/Recipe';
import RecipeDetail from './source/screens/RecipeDetail';
import {screenNames} from './source/navigationConstants';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    enableScreens();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name={screenNames.SplashScreen}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={screenNames.Home} component={Home} />
        <Stack.Screen name={screenNames.Recipe} component={Recipe} />
        <Stack.Screen
          name={screenNames.RecipeDetails}
          component={RecipeDetail}
        />
        <Stack.Screen
          name={screenNames.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name={screenNames.Otp} component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
