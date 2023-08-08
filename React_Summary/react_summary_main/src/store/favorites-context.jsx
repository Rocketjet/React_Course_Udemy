import React, { useState } from 'react';

const FavoritesContext = React.createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
}
);

export function FavoritesContexProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }
  const context = {
    favorites: userFavorites,
    favoritesCount: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>;
}
export default FavoritesContext;