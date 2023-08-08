import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import Loader from '../UI/Loader';
// import loaderStyles from '../UI/Loader.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchmeals = async () => {
      const response = await fetch(
        'https://react-udemy-s14-dcbf6-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();
      const meals = [];

      for (const key in responseData) {
        meals.push({
          ...responseData[key],
          id: key,
        });
      }

      setMeals(meals);
      setLoading(false);
    };
    fetchmeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);
  console.log(meals);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      {!loading ? (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default AvailableMeals;
