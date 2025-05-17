import {View, Text} from 'react-native';
import {useState} from 'react';
import Input from '../../components/Input/Input';
import {styles} from './Login.styles';

import Button from '../../components/Button/Button';
import {InputType} from './Login.container';

type LoginProps = {
  inputProps: InputType;
  handleSubmit: () => void;
  onChange: (value: string) => void;
};

const Login = (props: LoginProps) => {
  const {inputProps, handleSubmit, onChange} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input
        value={inputProps?.value}
        onChange={onChange}
        maxLength={inputProps?.maxLength}
        keyboardType={inputProps?.keyboardType}
        placeholder={inputProps?.placeholder}
      />
      <Button handleSubmit={handleSubmit} title="Send OTP" />
    </View>
  );
};

export default Login;
