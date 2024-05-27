// src/components/Pagination.js
import React from 'react';

import EpisodeCard from '../episode-card';
import PaginationComponent from '../pagination';

const MainScreen = () => {
  const episodeApiUrl = '/episode/';
  return (
    <PaginationComponent
      url={episodeApiUrl}
      renderItem={({item}) => <EpisodeCard item={item} />}
    />
  );
};

export default MainScreen;
