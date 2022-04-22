import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#6e74dc'},
  cardContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {fontSize: 20, fontWeight: 'bold'},
});
