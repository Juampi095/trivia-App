import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../screens/ResultScreenStyles';

type RootStackParamList = {
  TriviaApp: undefined;
  TriviaScreen: {category: string; difficulty: string};
  ResultScreen: {score: number; category: string; difficulty: string};
};

export const ResultScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'ResultScreen'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ResultScreen'>>();
  const {score, category, difficulty} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Game over! Your score is: {score}</Text>
      <Button
        title="Restart"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'TriviaScreen', params: {category, difficulty}}],
          })
        }
        color="#0984e3"
      />
      <Button
        title="Exit"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'TriviaApp', params: {category, difficulty}}],
          })
        }
        color="#d63031"
      />
    </View>
  );
};
