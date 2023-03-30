import React, { useState } from 'react';
import {
  Image, Pressable, Text,
  TextInput, View, Modal,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const Input = ({ lable, type, options, placeholder, isPassword, value, onChangeText, style, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModelVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect = (opt) => {
    onChangeText(opt);
    setPickerModelVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
      {type === 'picker' ? (
        <Pressable onPress={() => setPickerModelVisible(true)} style={styles.inputContainer}>
          {value ? (
            <Text style={[styles.input, style]}>{value.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}
          <Image
            style={styles.arrow}
            source={require('../../assets/arrow.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            style={[styles.input, style]}
            {...props}
          />
          {isPassword && (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require('../../assets/eye.png')
                    : require('../../assets/eye_closed.png')
                }
              />
            </Pressable>
          )}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity activeOpacity={1} onPress={() => setPickerModelVisible(false)} style={styles.modalWraper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContant}>
            <Text style={styles.headerTitle}>Select options</Text>

            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }

              const selected = value?.id === opt?.id;

              return (
                <Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
              )
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View >
  );
};

export default React.memo(Input);
