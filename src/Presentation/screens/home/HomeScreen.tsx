import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {SelectModal} from '../../components/SelectModal';
import {styles} from '../../styles/GlobalStyles';

type RootStackParamList = {
  TriviaApp: undefined;
  TriviaScreen: {category: string; difficulty: string};
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TriviaApp'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'category' | 'difficulty'>(
    'category',
  );

  const handleSelect = (value: string) => {
    if (modalType === 'category') {
      setCategory(value);
    } else {
      setDifficulty(value);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Trivia App!</Text>

      <Button
        title={category || 'Select category'}
        onPress={() => {
          setModalType('category');
          setModalVisible(true);
        }}
        color="#74b9ff"
      />

      <Button
        title={difficulty || 'Select difficulty'}
        onPress={() => {
          setModalType('difficulty');
          setModalVisible(true);
        }}
        color="#74b9ff"
      />
      <Button
        title="Play!"
        onPress={() =>
          navigation.navigate('TriviaScreen', {category, difficulty})
        }
        disabled={!category || !difficulty}
        color={!category || !difficulty ? 'gray' : '#0984e3'}
      />
      <SelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelect}
        type={modalType}
      />
    </View>
  );
};
