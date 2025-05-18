import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './Button.styles';

type ButtonProps = {
  handleSubmit: () => void;
  title: string;
  isDisabled?: boolean;
};
const Button = (props: ButtonProps) => {
  const {handleSubmit, title, isDisabled} = props;
  return (
    <TouchableOpacity
      style={
        isDisabled
          ? StyleSheet.flatten([styles.button, styles.disabledButton])
          : styles.button
      }
      onPress={handleSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
