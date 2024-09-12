import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/GlobalStyles';

type RouteParams = {
  category: string;
  difficulty: string;
};

type RootStackParamList = {
  TriviaScreen: undefined;
  ResultScreen: {score: number; category: string; difficulty: string};
};

const categoryMap: {[key: string]: number} = {
  'General Knowledge': 9,
  'Entertainment: Video Games': 15,
  Mythology: 20,
  Vehicles: 28,
};

export const TriviaScreen = () => {
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
        const categoryId = categoryMap[category];
        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`,
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setQuestions(data.results);
          shuffleAnswers(data.results[0]);
        } else {
          setError('No questions available for this category/difficulty');
        }
      } catch (error) {
        setError('Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  const shuffleAnswers = (question: any) => {
    const answers = question.incorrect_answers.concat(question.correct_answer);
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
  };

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
      shuffleAnswers(questions[currentQuestionIndex + 1]);
    } else {
      navigation.navigate('ResultScreen', {score, category, difficulty});
    }
  };

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return <Text>No questions found</Text>;

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
          {backgroundColor: selectedAnswer === null ? 'gray' : '#9ebaff'},
        ]}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
