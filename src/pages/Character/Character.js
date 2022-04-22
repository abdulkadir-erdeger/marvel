import {View, Text, Image, FlatList, Alert} from 'react-native';
import React from 'react';
import styles from './Character.styles';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';

export default function Character({route, navigation}) {
  const comicsList = route.params.comics.items;
  const detailsData = route.params;

  const data = route.params.name;

  const dispatch = useDispatch();
  const favChar = useSelector(state => state.favouriteCharacter);

  const handleComicsList = ({item}) => (
    <Text style={styles.text}>{item.name}</Text>
  );

  const handleDetails = () => {
    navigation.navigate('DetailsPage', detailsData);
  };

  const handleFavorite = favouriteCharacter => {
    dispatch({type: 'ADD_FAVOURITE', payload: {favouriteCharacter}});
  };

  const favControl = data => {
    let durum = '';
    if (favChar.length < 1) {
      durum = 'yükle';
    }
    for (let x = 0; x < favChar.length; x++) {
      if (favChar[x] == data) {
        durum = 'yükleme';
        break;
      } else {
        durum = 'yükle';
      }
    }
    if (durum == 'yükle') {
      handleFavorite(data);
    } else {
      Alert.alert('Hata!', 'Daha önce eklediniz.');
    }
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
      <Text style={styles.header}>Çizgi Romanlar</Text>
      <FlatList
        style={styles.flatlist}
        data={comicsList}
        renderItem={handleComicsList}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="    Details   "
          theme="secondary"
          onPress={handleDetails}
        />
        <Button
          title="    Favorite   "
          theme="secondary"
          onPress={() => favControl(data)}
        />
      </View>
    </View>
  );
}
