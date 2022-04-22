import {View, Text, StatusBar, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../animations/Loading';
import CharacterCard from '../../components/CharacterCard';
import ComicCard from '../../components/ComicCard';
import styles from './Home.styles';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

const url = `${Config.API_URL_CHARACTERS}?${Config.API_KEY}`;
const url2 = `${Config.API_URL_COMICS}?${Config.API_KEY}`;

export default function Home({navigation}) {
  const CharacterRulo = () => {
    const {data, error, loading} = useFetch(url);

    const handleCharacterDataCard = ({item}) => {
      return <CharacterCard item={item} onPress={() => navCharacter(item)} />;
    };

    if (loading) {
      return <Loading />;
    }

    return (
      <View>
        <Text style={styles.title}>Karakterler</Text>
        <FlatList data={data} renderItem={handleCharacterDataCard} horizontal />
      </View>
    );
  };

  const navCharacter = item => {
    navigation.navigate('CharacterPage', item);
  };

  const navComics = item => {
    navigation.navigate('ComicsPage', item);
  };

  const ComicRulo = () => {
    const {data, error, loading} = useFetch(url2);
    const handleComicsDataCard = ({item}) => {
      return <ComicCard item={item} onPress={() => navComics(item)} />;
    };

    if (loading) {
      return <Loading />;
    }

    return (
      <View style={styles.flatRolu}>
        <Text style={styles.title}>Çizgi Romanlar</Text>
        <FlatList
          data={data}
          renderItem={handleComicsDataCard}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00227b" barStyle="light-content" />
      <CharacterRulo />
      <ComicRulo />
    </View>
  );
}
