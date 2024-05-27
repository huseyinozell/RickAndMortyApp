// src/components/Pagination.js
import React from 'react';

import EpisodeCard from '../episode-card';
import PaginationComponent from '../pagination';

const MainScreen = () => {
  return (
    <PaginationComponent
      url={'/episode/'}
      renderItem={({item}) => <EpisodeCard item={item} />}
    />
  );
};

export default MainScreen;
