import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    height: 280,
    width: '100%',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins-Bold',
  },
});
