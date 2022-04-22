import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './Details.styles';
import {useNavigationState} from '@react-navigation/native';

export default function Details({route}) {
  const navi = useNavigationState(state => state.routes[1].name);
  if (navi == 'CharacterPage') {
    const series = route.params.series.items;
    const stories = route.params.stories.items;

    const handleSeries = ({item}) => (
      <Text style={styles.text}>{item.name}</Text>
    );
    const handleStories = ({item}) => (
      <Text style={styles.text}>{item.name}</Text>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Diziler</Text>
        <FlatList
          style={styles.flatlist}
          data={series}
          renderItem={handleSeries}
        />
        <Text style={styles.header}>Hikayeler</Text>
        <FlatList
          style={styles.flatlist}
          data={stories}
          renderItem={handleStories}
        />
      </View>
    );
  }
  if (navi == 'ComicsPage') {
    const stories = route.params.stories.items;
    const creators = route.params.creators.items;

    const handleStories = ({item}) => (
      <Text style={styles.text}>{item.name}</Text>
    );

    const handleCreators = ({item}) => (
      <Text style={styles.text}>{item.name}</Text>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hikayeler</Text>
        <FlatList
          style={styles.flatlist}
          data={stories}
          renderItem={handleStories}
        />
        <Text style={styles.header}>Creators</Text>
        <FlatList
          style={styles.flatlist}
          data={creators}
          renderItem={handleCreators}
        />
      </View>
    );
  }
}
