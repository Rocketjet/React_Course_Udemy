import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritePage() {
  const context = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      {context.favoritesCount === 0 ? 'You dont have favorites for now...'
        : <MeetupList meetups={context.favorites} />}
    </section>
  );
}

export default FavoritePage;