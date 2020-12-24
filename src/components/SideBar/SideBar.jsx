import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogues" activeClassName={classes.active}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>
          Music
        </NavLink>
      </div>
      <br></br>
      <div className={`${classes.item} ${classes.active}`}>
        {/* Esli bolshe odnogo klassa to konkotinacija strok */}
        <NavLink to="/settings" activeClassName={classes.active}>
          Settings
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.friends} ${classes.active}`}>
        <NavLink to="/friends" activeClassName={classes.active}>
          Friends
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/myfriends" activeClassName={classes.active}>
          My Friends
        </NavLink>
      </div>
     
    </nav>
  );
};
export default SideBar;
