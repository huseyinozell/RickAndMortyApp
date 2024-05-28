import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchData} from '../services/rickAndMortyService';

const PaginationComponent = ({renderItem, url}) => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

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
      setOriginalData(dataList);
      setFilteredData(dataList);
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

  const handleSearch = text => {
    setSearchText(text);
    const filtered = filterData(text);
    setFilteredData(filtered);
  };

  const filterData = searchText => {
    return originalData.filter(
      item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.status?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.species?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.gender?.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{margin: 20}} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Arama.."
        placeholderTextColor={'black'}
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    color: 'black',
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
