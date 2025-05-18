import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#007BFF',
    fontWeight: '600',
    marginLeft: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
});
