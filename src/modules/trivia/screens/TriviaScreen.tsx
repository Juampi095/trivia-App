import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {TriviaService} from '../services/TriviaService';
import {makeStyles} from './TriviaScreenStyle';

type RouteParams = {
  category: string;
  difficulty: string;
};

type RootStackParamList = {
  TriviaScreen: undefined;
  ResultScreen: {score: number; category: string; difficulty: string};
};

export const TriviaScreen = () => {
  const styles = makeStyles();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'TriviaScreen'>>();
  const route = useRoute<RouteProp<{params: RouteParams}, 'params'>>();
  const {category, difficulty} = route.params;

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const questions = await TriviaService.fetchQuestions(
          category,
          difficulty,
        );
        setQuestions(questions);
        setShuffledAnswers(TriviaService.shuffleAnswers(questions[0]));
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [category, difficulty]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer === null && questions[currentQuestionIndex]) {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 20);
        Alert.alert('Correct!', '+20');
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShuffledAnswers(
        TriviaService.shuffleAnswers(questions[currentQuestionIndex + 1]),
      );
    } else {
      //TODO: probar naviagte en lugar de push
      navigation.navigate('ResultScreen', {score, category, difficulty});
    }
  };

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion)
    return <Text style={styles.text}>No questions found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>
        Question {currentQuestionIndex + 1}
      </Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      {shuffledAnswers.map((answer: string) => (
        <TouchableOpacity
          key={answer}
          onPress={() => handleAnswer(answer)}
          disabled={selectedAnswer !== null}
          style={[
            styles.answerButton,
            selectedAnswer && {
              backgroundColor:
                answer === currentQuestion.correct_answer
                  ? 'green'
                  : selectedAnswer === answer
                  ? 'red'
                  : 'gray',
            },
          ]}>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={handleNext}
        disabled={selectedAnswer === null}
        style={[
          styles.nextButton,
          {backgroundColor: selectedAnswer === null ? 'gray' : '#FF7F50'},
        ]}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
