import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#6e74dc'},
  flatlist: {backgroundColor: 'white', width: width, padding: 5},
  header: {fontSize: 18, color: 'white', fontWeight: '800', padding: 10},
  text: {fontSize: 16, color: 'black', padding: 2},
});
