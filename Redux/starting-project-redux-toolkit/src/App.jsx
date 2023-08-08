import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import UserProfile from './components/UserProfile/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
