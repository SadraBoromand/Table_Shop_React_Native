import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import styles from './styles';

const Input = ({ lable, placeholder, isPassword, props, value, onChangeText }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          {...props}
          placeholder={placeholder}
          style={styles.input}
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
    </View>
  );
};

export default React.memo(Input);
