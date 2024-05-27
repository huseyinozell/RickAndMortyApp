// src/components/Pagination.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {fetchEpisodes} from '../../services/rickAndMortyService';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon library
import EpisodeCard from '../episode-card';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}) => <EpisodeCard item={item} />;

  const loadEpisodes = async pageNumber => {
    setLoading(true);

    const itemsPerPage = 5;

    const start = (pageNumber - 1) * itemsPerPage + 1;
    const episodeIds = Array.from(
      {length: itemsPerPage},
      (_, i) => i + start,
    ).join(',');

    const data = await fetchEpisodes(episodeIds);

    if (data) {
      const episodes = Array.isArray(data) ? data : [data];
      setData(episodes);
      setPage(pageNumber);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadEpisodes(1);
  }, []);

  const handlePageChange = newPage => {
    if (newPage > 0) {
      loadEpisodes(newPage);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{margin: 20}} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePageChange(page - 1)}
          disabled={page === 1}>
          <Icon
            name="chevron-left"
            size={30}
            color={page === 1 ? 'grey' : '#ccc'}
          />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>{page}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePageChange(page + 1)}>
          <Icon name="chevron-right" size={30} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  pageNumber: {
    fontSize: 18,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MainScreen;
