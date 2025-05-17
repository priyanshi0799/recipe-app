import {KeyboardTypeOptions} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
import {screenNames} from '../../navigationConstants';

export type InputType = {
  value: string;
  error: string;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
};
const LoginContainer = () => {
  const navigation = useNavigation<any>();

  const [number, setNumber] = useState<InputType>({
    value: '',
    error: '',
    maxLength: 10,
    keyboardType: 'number-pad',
    placeholder: 'Enter mobile number',
  });

  const onChange = (value: string) => {
    setNumber(prevState => ({
      ...prevState,
      value: value,
    }));
  };

  const handleSubmit = () => navigation.navigate(screenNames.Otp);

  return (
    <Login
      inputProps={number}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
};

export default LoginContainer;
