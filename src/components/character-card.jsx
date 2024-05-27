import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleImage from './circle-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CharacterCard = ({character}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);

  const handleShowCharacters = () => {
    navigation.navigate('CharacterDetails', {data: character});
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
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

        <TouchableOpacity onPress={toggleFavorite} style={styles.iconContainer}>
          <Icon
            name="star"
            size={24}
            color={favorite ? 'orange' : 'grey'}
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
