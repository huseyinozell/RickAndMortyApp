import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const CircleImage = ({url}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start', // Sol hizalama
    margin: 10,
  },
  image: {
    width: 100, // Görüntünün genişliği
    height: 100, // Görüntünün yüksekliği
    borderRadius: 50, // Yarıçapı genişliğin yarısı yaparak daire oluşturulur
  },
});

export default CircleImage;
