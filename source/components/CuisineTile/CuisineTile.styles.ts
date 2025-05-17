import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // image: {
  //   width: '95%',
  //   height: 280,
  //   borderRadius: 12,
  // },
  // text: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#333',
  //   marginBottom: 4,
  //   marginLeft: 4,
  // },
  // description: {
  //   fontSize: 16,
  //   color: '#666',
  //   marginBottom: 12,
  //   marginTop: 8,
  //   marginLeft: 4,
  // },
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
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
