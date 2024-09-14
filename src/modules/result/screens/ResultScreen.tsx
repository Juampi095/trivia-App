import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AnimationLottie} from '../../../components/animationComponent/AnimationGif.tsx';
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
    <ScrollView style={styles.container}>
      <View style={styles.viewMainContainer}>
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
        <AnimationLottie source="https://lottie.host/967ba091-b3df-41c8-a1f6-26edd25d0f0a/bH8UYdpXsU.json" />
      </View>
    </ScrollView>
  );
};
