import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList/MeetupList';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    fetch('https://react-summary-c46c8-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
      .then(res => res.json())
      .then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>

      ) : (
        <>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </>
      )}
    </section>
  );
}

export default AllMeetupsPage;