import {View, Text} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useFetch from './src/hooks/useFetch';

const url = Config.API_URL_CHARACTERS;

export default function App() {
  const {data, error, loading} = useFetch(url);
  console.log(data);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
