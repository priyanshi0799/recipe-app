import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CARD_MARGIN = 8;
const CARD_WIDTH = (screenWidth - CARD_MARGIN * 3) / 2;

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingVertical: 20},
  list: {padding: CARD_MARGIN},
  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_MARGIN * 2,
  },
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
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
