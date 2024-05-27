// src/components/Pagination.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { fetchEpisodes } from '../services/rickAndMortyService';

const Pagination = ({ apiUrl, renderItem, itemsPerPage = 10 }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const fetchData = async () => {
    if (loading || isEnd) return;

    setLoading(true);

    try {
      const response = await fetchEpisodes
      if (response.data) {
        setData((prevData) => [...prevData, ...response.data.results]);
        setPage(page + 1);
        if (!response.data.info.next) {
          setIsEnd(true);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ margin: 20 }} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
      onEndReached={fetchData}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Pagination;
