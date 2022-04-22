import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './Comics.styles';
import Button from '../../components/Button';

export default function Comics({route, navigation}) {
  const characterList = route.params.characters.items;
  const detailsData = route.params;

  const handleCharacterList = ({item}) => (
    <Text style={styles.text}>{item.name}</Text>
  );

  const handleDetails = () => {
    navigation.navigate('DetailsPage', detailsData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{uri: route.params.thumbnail.path + '/portrait_xlarge.jpg'}}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.description}>{route.params.description}</Text>
      </View>
      <Text style={styles.header}>Karakterler</Text>
      <FlatList
        style={styles.flatlist}
        data={characterList}
        renderItem={handleCharacterList}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="    Details   "
          theme="secondary"
          onPress={handleDetails}
        />
      </View>
    </View>
  );
}
