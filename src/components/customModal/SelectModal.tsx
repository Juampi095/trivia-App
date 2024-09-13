import React from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../modules/home/screens/HomeScreenStyle';

type SelectModalProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  type: 'category' | 'difficulty';
};

export const SelectModal = (props: SelectModalProps) => {
  const {visible, onClose, onSelect, type} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            {type === 'category' ? 'Select category' : 'Select difficulty'}
          </Text>
          {type === 'category' ? (
            <>
              <TouchableOpacity onPress={() => onSelect('General Knowledge')}>
                <Text style={styles.optionText}>General Knowledge</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onSelect('Entertainment: Video Games')}>
                <Text style={styles.optionText}>
                  Entertainment: Video Games
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSelect('Mythology')}>
                <Text style={styles.optionText}>Mythology</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSelect('Vehicles')}>
                <Text style={styles.optionText}>Vehicles</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => onSelect('easy')}>
                <Text style={styles.optionText}>Easy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSelect('medium')}>
                <Text style={styles.optionText}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSelect('hard')}>
                <Text style={styles.optionText}>Hard</Text>
              </TouchableOpacity>
            </>
          )}
          <Button title="Cancel" onPress={onClose} color="#d63031" />
        </View>
      </View>
    </Modal>
  );
};
