import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../modules/home/screens/HomeScreen';
import {ResultScreen} from '../modules/result/screens/ResultScreen';
import {TriviaScreen} from '../modules/trivia/screens/TriviaScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TriviaApp"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TriviaScreen"
        component={TriviaScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
