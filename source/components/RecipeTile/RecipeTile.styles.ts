import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CARD_MARGIN = 8;
const CARD_WIDTH = (screenWidth - CARD_MARGIN * 3) / 2;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    overflow: 'hidden',
    width: CARD_WIDTH,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 0.7,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
