import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Favorite.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Favorite() {
  const favChar = useSelector(state => state.favouriteCharacter);
  const dispatch = useDispatch();
  const removeJob = item => {
    dispatch({type: 'REMOVE_FAVOURITE', payload: {char: item}});
  };

  const renderFavouriteItems = ({item}) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{item}</Text>
      <Icon
        name="delete"
        color="black"
        size={45}
        onPress={() => removeJob(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={favChar} renderItem={renderFavouriteItems} />
    </View>
  );
}
