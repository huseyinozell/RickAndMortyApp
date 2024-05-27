import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PaginationComponent from '../pagination';
import CharacterCard from '../character-card';
import CircleImage from '../circle-image';

const CharacterDetails = ({route}) => {
  const characterData = route.params?.data;

  return (
    <>
      <View style={styles.card}>
        <View style={styles.header}>
          <CircleImage url={characterData.image} />
          <Text style={styles.title}>{characterData.name}</Text>
          <Text style={styles.title}>{characterData.status}</Text>
          <Text style={styles.title}>{characterData.species}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.episode}>{characterData.gender}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
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
});

export default CharacterDetails;
