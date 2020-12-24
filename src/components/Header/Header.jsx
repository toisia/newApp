import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://c7.hotpng.com/preview/471/689/68/logo-flower-royalty-free-flower.jpg"></img>

<div className={classes.loginBlock}>
  {props.isAuth 
  ? <div>
    {props.login}  <button onClick={props.logout}>Log out</button>

  </div>
:<NavLink to={'/login'}>Login</NavLink>}
</div>


      </header>
}

export default Header;