import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#6e74dc', alignItems: 'center'},
  innerContainer: {
    backgroundColor: 'white',
    width: width,
  },
  image: {
    width: width,
    height: height / 3,
  },
  description: {
    position: 'absolute',
    fontSize: 16,
    padding: 5,
    bottom: 0,
    color: 'white',
    width: width,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  buttonContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3849aa',
    padding: 5,
    paddingBottom: 10,
  },
  flatlist: {backgroundColor: 'white', width: width, padding: 10},
  text: {fontSize: 16, color: 'black'},
  header: {fontSize: 18, color: 'white', fontWeight: '800', padding: 3},
});
