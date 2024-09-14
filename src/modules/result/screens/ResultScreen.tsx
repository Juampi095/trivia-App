import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {makeStyles} from '../screens/ResultScreenStyles';

type RootStackParamList = {
  TriviaApp: undefined;
  TriviaScreen: {category: string; difficulty: string};
  ResultScreen: {score: number; category: string; difficulty: string};
};

export const ResultScreen = () => {
  const styles = makeStyles();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'ResultScreen'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ResultScreen'>>();
  const {score, category, difficulty} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Game over! Your score is: {score}</Text>
      <TouchableOpacity
        style={styles.buttonRestart}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'TriviaScreen', params: {category, difficulty}}],
          })
        }>
        <Text style={styles.buttonText}>Restart!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonExit}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'TriviaApp', params: {category, difficulty}}],
          })
        }>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};
