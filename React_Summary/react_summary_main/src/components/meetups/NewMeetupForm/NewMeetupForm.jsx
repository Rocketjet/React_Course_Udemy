import { useRef } from 'react';
import Card from '../../ui/Card/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({ onAddMeetup }) {
  const titleInputref = useRef();
  const imageInputref = useRef();
  const addressInputref = useRef();
  const descriptionInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const newTitle = titleInputref.current.value;
    const newImage = imageInputref.current.value;
    const newAddress = addressInputref.current.value;
    const newDescription = descriptionInputref.current.value;
    const meetupData = {
      title: newTitle,
      image: newImage,
      address: newAddress,
      description: newDescription
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id='title' ref={titleInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id='image' ref={imageInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id='address' ref={addressInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required id='description'
            rows='5'
            ref={descriptionInputref}
          >
          </textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;