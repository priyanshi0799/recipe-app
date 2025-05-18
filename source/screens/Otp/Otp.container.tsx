import {TextInput} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import Otp from './Otp';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigationConstants';
import {useMutation} from '@tanstack/react-query';
import {signinUser, signupUser} from '../../network/api';
import axios from 'axios';

interface OtpContainerRouteParams {
  number: string;
  password: string;
  isSignUp: boolean;
}

const OtpContainer = ({route}: {route: {params: OtpContainerRouteParams}}) => {
  const {number, password, isSignUp} = route.params;

  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const [isValid, setIsValid] = useState(false);
  const [apiError, setError] = useState('');

  useEffect(() => {
    if (otp.join('').length === 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [otp]);

  const {mutate} = useMutation({
    mutationFn: isSignUp ? signupUser : signinUser,
    onSuccess: data => {
      navigation.reset({
        index: 0,
        routes: [{name: screenNames.Home}],
      });
    },
    onError: (err: any) => {
      let errorMessage = 'Something went wrong';

      if (axios.isAxiosError(err)) {
        errorMessage =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message;
      }

      setError(errorMessage);
    },
  });

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 5) {
        if (inputs.current[index + 1]) {
          inputs.current[index + 1]?.focus();
        }
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleSubmit = () =>
    mutate({
      number: number,
      password: password,
      otp: otp.join(''),
    });

  return (
    <Otp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      otp={otp}
      ref={inputs}
      isValid={isValid}
      error={apiError}
    />
  );
};

export default OtpContainer;
