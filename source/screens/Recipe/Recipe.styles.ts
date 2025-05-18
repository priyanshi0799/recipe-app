import {StyleSheet} from 'react-native';

const CARD_MARGIN = 8;

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingVertical: 20},
  list: {padding: CARD_MARGIN},
  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_MARGIN * 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
