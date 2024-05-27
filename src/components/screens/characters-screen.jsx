// CharacterList.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterList = ({route}) => {
  const episodeData = route.params?.data;

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{episodeData.name}</Text>
          <Text style={styles.subtitle}>{episodeData.air_date}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.episode}>{episodeData.episode}</Text>
        </View>
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

export default CharacterList;
