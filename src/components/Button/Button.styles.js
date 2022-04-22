import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d1b7ad',
  },
  text: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#00227b',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
    },
    text: {
      ...baseStyle.text,
      color: '#00227b',
    },
  }),
};
