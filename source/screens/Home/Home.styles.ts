import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
  },
  heading: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
  retryText: {
    color: 'red',
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
