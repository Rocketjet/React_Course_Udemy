import MainNavigation from '../MainNavigation/MainNavigation';
import classes from '../layout/Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;