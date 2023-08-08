import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const emailInputref = useRef();
  const passwordInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    if (emailInputref.current.value && passwordInputref.current.value) {
      dispatch(login(true));
    }
    else {
      alert('Enter email and password');
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputref} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputref} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
