import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {addFavorite, removeFavorite} from '../../state/actions';
import CharacterCard from '../character-card';
import {ScrollView} from 'react-native-gesture-handler';

const FavoriteCharacterList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  console.log(favorites);

  const showFavorites = () => {
    if (favorites) {
      console.log('Yoo Bende', favorites);
      return favorites.map(f => {
        return f.name ? <CharacterCard key={f.name} character={f} /> : '';
      });
    } else {
      console.log('Bende');
      return <Text>Favori Listeniz Boş!</Text>;
    }
  };

  return <ScrollView>{showFavorites()}</ScrollView>;
};

export default FavoriteCharacterList;
