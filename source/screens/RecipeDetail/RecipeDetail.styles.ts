import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 220,
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 6,
  },
  item: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 4,
    color: '#333',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
