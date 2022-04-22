import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ComicCard.styles';

export default function ComicCard({item, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: item.thumbnail.path + '/portrait_xlarge.jpg'}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
