import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    height: height / 5,
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: width * 0.39,
    height: height / 5.1,
    borderRadius: 12,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    start: 0,
    end: 0,
    textAlign: 'center',
    opacity: 0.8,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
