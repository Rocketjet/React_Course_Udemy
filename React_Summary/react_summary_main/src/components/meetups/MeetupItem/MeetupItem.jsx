import classes from './MeetupItem.module.css';
import Card from '../../ui/Card/Card';
import { useContext } from 'react';
import FavoritesContext from '../../../store/favorites-context';

function MeetupItem({ meetup }) {
  const context = useContext(FavoritesContext);

  const itemIsFavorite = context.itemIsFavorite(meetup.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      context.removeFavorite(meetup.id);
    } else {
      context.addFavorite({ ...meetup });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img src={meetup.image} alt={meetup.title} className={classes.image} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;