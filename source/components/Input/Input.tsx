import {TextInput, KeyboardTypeOptions} from 'react-native';
import React from 'react';
import {styles} from './Input.styles';

type InputProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
};

const Input = (props: InputProps) => {
  const {value, onChange, placeholder, keyboardType, maxLength} = props;
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder || ''}
      keyboardType={keyboardType || 'default'}
      maxLength={maxLength}
      value={value}
      onChangeText={(val: string) => onChange(val)}
    />
  );
};

export default Input;
