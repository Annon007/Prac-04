import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
const Header = () => {
  const isLogin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandeler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLogin && <li>
            <a href='/'>My Products</a>
          </li>}
          {isLogin && <li>
            <a href='/'>My Sales</a>
          </li>}
          {isLogin && <li>
            <button onClick={logoutHandeler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
