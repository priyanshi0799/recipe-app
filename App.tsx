import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './source/screens/SplashScreen';
import Home from './source/screens/Home';
import {enableScreens} from 'react-native-screens';
import Login from './source/screens/Login';
import Otp from './source/screens/Otp';
import Recipe from './source/screens/Recipe';
import RecipeDetail from './source/screens/RecipeDetail';
import {HeaderTitles, screenNames} from './source/navigationConstants';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import FavoriteRecipesContainer from './source/screens/FavoriteRecipes';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useEffect(() => {
    enableScreens();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screenNames.SplashScreen}>
          <Stack.Screen
            name={screenNames.SplashScreen}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={screenNames.Home}
            component={Home}
            options={{
              title: HeaderTitles.Home,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name={screenNames.Recipe}
            component={Recipe}
            options={{
              title: HeaderTitles.Recipe,
            }}
          />
          <Stack.Screen
            name={screenNames.FavoriteRecipes}
            component={FavoriteRecipesContainer}
            options={{
              title: HeaderTitles.FavoriteRecipes,
            }}
          />
          <Stack.Screen
            name={screenNames.RecipeDetails}
            component={RecipeDetail}
            options={{
              title: HeaderTitles.RecipeDetails,
            }}
          />
          <Stack.Screen
            name={screenNames.Login}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name={screenNames.Otp} component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
