import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SelectModal} from '../../../components/customModal/SelectModal';
import {makeStyles} from './HomeScreenStyle';

type RootStackParamList = {
  TriviaApp: undefined;
  TriviaScreen: {category: string; difficulty: string};
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TriviaApp'
>;

export const HomeScreen = () => {
  const styles = makeStyles();
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
    <ScrollView style={styles.container}>
      <View style={styles.viewMainContainer}>
        <Text style={styles.titleText}>Welcome to Trivia App!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalType('category');
            setModalVisible(true);
          }}>
          <Text style={styles.buttonText}>{category || 'Select Category'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalType('difficulty');
            setModalVisible(true);
          }}>
          <Text style={styles.buttonText}>
            {difficulty || 'Select difficulty'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, ...styles.buttonPlay}}
          onPress={() =>
            navigation.navigate('TriviaScreen', {category, difficulty})
          }
          disabled={!category || !difficulty}>
          <Text style={styles.buttonText}>Play!</Text>
        </TouchableOpacity>
        <SelectModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={handleSelect}
          type={modalType}
        />
      </View>
    </ScrollView>
  );
};
