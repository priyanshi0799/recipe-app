import {TextInput, Alert} from 'react-native';
import {useState, useRef} from 'react';
import Otp from './Otp';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigationConstants';

const OtpContainer = () => {
  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

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

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length < 6) {
      Alert.alert('Invalid', 'Please enter a 6-digit OTP');
    } else {
      navigation.replace(screenNames.Home);
    }
  };

  return (
    <Otp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      otp={otp}
      ref={inputs}
    />
  );
};

export default OtpContainer;
