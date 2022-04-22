import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './DetailsCard.styles';
export default function DetailsCard({item}) {
  console.log(item);
  return (
    <View style={styles.container}>
      {/*}
      {data[0].images ? (
        <Image
          source={{uri: data[0].images[0].path + '/portrait_xlarge.jpg'}}
          style={styles.image}
          resizeMode="contain"
        />
      ) : null}
      {*/}
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}
