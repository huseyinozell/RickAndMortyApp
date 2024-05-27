import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EpisodeCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.air_date}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.episode}>{item.episode}</Text>
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
  body: {},
  episode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default EpisodeCard;
