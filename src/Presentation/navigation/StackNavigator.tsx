import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ResultScreen} from '../screens/result/ResultScreen';
import {TriviaScreen} from '../screens/trivia/TriviaScreen';

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
