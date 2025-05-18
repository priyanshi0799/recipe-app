import {View, Text, TouchableOpacity} from 'react-native';
import Input from '../../components/Input/Input';
import {styles} from './Login.styles';
import Button from '../../components/Button/Button';
import {InputType} from './Login.container';

type LoginProps = {
  inputProps: InputType;
  passwordProps: InputType;
  handleSubmit: () => void;
  onChange: (value: string) => void;
  handleSignUp: () => void;
  isSignUp: boolean;
  onPasswordChange: (value: string) => void;
  error: string;
  isError: boolean;
};

const Login = (props: LoginProps) => {
  const {
    inputProps,
    handleSubmit,
    onChange,
    passwordProps,
    handleSignUp,
    isSignUp,
    onPasswordChange,
    error,
    isError,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSignUp ? 'Create your account' : 'Welcome Back! Login'}
      </Text>

      <Input
        value={inputProps?.value}
        onChange={onChange}
        maxLength={inputProps?.maxLength}
        keyboardType={inputProps?.keyboardType}
        placeholder={inputProps?.placeholder}
      />
      <Input
        value={passwordProps?.value}
        onChange={onPasswordChange}
        keyboardType={passwordProps?.keyboardType}
        placeholder={passwordProps?.placeholder}
      />

      {error?.length ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button
        isDisabled={isError}
        handleSubmit={handleSubmit}
        title="Send OTP"
      />

      <View style={styles.wrapper}>
        <Text>
          {isSignUp ? 'Already have an account?' : 'Do not have an account?'}
        </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>
            {isSignUp ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
