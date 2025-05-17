import {View, Text, TextInput} from 'react-native';
import Button from '../../components/Button/Button';
import {styles} from './Otp.styles';

type OtpProps = {
  otp: string[];
  handleChange: (text: string, index: number) => void;
  handleSubmit: () => void;
  ref: React.RefObject<(TextInput | null)[]>;
};

function Otp(props: OtpProps) {
  const {otp, handleChange, handleSubmit, ref} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={r => {
              ref.current[index] = r;
            }}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.otpInput}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <Button handleSubmit={handleSubmit} title="Verify OTP" />
    </View>
  );
}

export default Otp;
