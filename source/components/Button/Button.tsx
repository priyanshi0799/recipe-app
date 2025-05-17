import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './Button.styles';

type ButtonProps = {
  handleSubmit: () => void;
  title: string;
};
const Button = (props: ButtonProps) => {
  const {handleSubmit, title} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
