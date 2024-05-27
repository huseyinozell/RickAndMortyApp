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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon library
import {fetchData} from '../services/rickAndMortyService';

const PaginationComponent = ({renderItem, url}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const renderItemFunction = ({item}) => renderItem({item});

  const loadData = async pageNumber => {
    setLoading(true);

    const itemsPerPage = 5;

    const start = (pageNumber - 1) * itemsPerPage + 1;
    const idList = Array.from({length: itemsPerPage}, (_, i) => i + start).join(
      ',',
    );

    const data = await fetchData(idList, url);

    if (data) {
      const dataList = Array.isArray(data) ? data : [data];
      setData(dataList);
      setPage(pageNumber);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData(1);
  }, []);

  const handlePageChange = newPage => {
    if (newPage > 0) {
      loadData(newPage);
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
        renderItem={renderItemFunction}
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
    color: 'black',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PaginationComponent;
