import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleImage from './circle-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addFavorite, removeFavorite} from '../state/actions';
import {useDispatch, useSelector} from 'react-redux';

const CharacterCard = ({character, iconName = 'star'}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = character =>
    favorites.some(favorite => favorite.id === character.id) || false;

  const toggleFavorite = (character, event) => {
    event.persist();
    if (isFavorite(character)) {
      Alert.alert(
        'Favoriden Kaldır',
        `${character.name} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`,
        [
          {
            text: 'Hayır',
            style: 'cancel',
          },
          {
            text: 'Evet',
            onPress: () => dispatch(removeFavorite(character)),
          },
        ],
        {cancelable: false},
      );
    } else {
      if (favorites.length >= 10) {
        Alert.alert(
          'Limit Aşıldı',
          'En fazla 10 karakter favorilere eklenebilir.',
          [{text: 'Tamam'}],
          {cancelable: false},
        );
      } else {
        dispatch(addFavorite(character));
      }
    }
  };

  const handleShowCharacters = () => {
    navigation.navigate('CharacterDetails', {data: character});
  };

  return (
    <View style={styles.card}>
      <CircleImage url={character.image} />
      <View style={styles.header}>
        <Text style={styles.title}>{character.name}</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleShowCharacters}>
          <Text style={styles.buttonText}>Karakter Detaylarını Göster</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={event => toggleFavorite(character, event)}
          style={styles.iconContainer}>
          <Icon
            name={iconName}
            size={24}
            color={
              iconName == 'star'
                ? isFavorite(character)
                  ? 'orange'
                  : 'grey'
                : 'black'
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    color: 'black',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  episode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconContainer: {
    marginLeft: 10,
  },
  icon: {
    // İkon stilleri buraya eklenebilir
  },
});

export default CharacterCard;
