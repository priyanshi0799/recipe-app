import {KeyboardTypeOptions} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
import {screenNames} from '../../navigationConstants';

export type InputType = {
  value: string;
  error: string;
  maxLength?: number;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
};

const LoginContainer = () => {
  const navigation = useNavigation<any>();

  const [isSignUp, setIsSignUp] = useState(false);

  const [number, setNumber] = useState<InputType>({
    value: '',
    error: '',
    maxLength: 10,
    keyboardType: 'number-pad',
    placeholder: 'Enter mobile number',
  });

  const [password, setPassword] = useState<InputType>({
    value: '',
    error: '',
    keyboardType: 'default',
    placeholder: 'Enter password',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    if (number.value.length === 10 && password.value.length >= 6) {
      setErrorMessage('');
      setError(false);
    } else {
      setError(true);
    }
  }, [number, password]);

  const onNumberChange = (value: string) => {
    setNumber(prevState => ({
      ...prevState,
      value: value,
    }));
  };

  const onPasswordChange = (value: string) => {
    setPassword(prevState => ({
      ...prevState,
      value: value,
    }));
  };

  const handleSubmit = () => {
    if (number.value.length !== 10 || password.value.length < 6) {
      setErrorMessage(
        'Please enter valid mobile number and password length should be atleast 6',
      );
      return;
    }

    navigation.navigate(screenNames.Otp, {
      number: number.value,
      password: password.value,
      isSignUp,
    });
  };

  const handleSignUp = () => {
    setErrorMessage('');
    setIsSignUp(!isSignUp);
  };

  return (
    <Login
      inputProps={number}
      passwordProps={password}
      handleSubmit={handleSubmit}
      onChange={onNumberChange}
      handleSignUp={handleSignUp}
      isSignUp={isSignUp}
      onPasswordChange={onPasswordChange}
      error={errorMessage}
      isError={error}
    />
  );
};

export default LoginContainer;
