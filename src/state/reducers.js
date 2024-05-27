import { combineReducers } from 'redux';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(character => character.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default rootReducer;
