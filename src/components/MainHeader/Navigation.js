import React,{ useContext } from 'react';
import AuthContext from '../Context/auth-context.js';
import classes from './Navigation.module.css';


const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
      <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.logout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;