import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogues.module.css";

const Message = (props) => {
  return (
    <div className={classes.message}>
      <NavLink to="/message/">{props.message}</NavLink>
    </div>
  );
};
 
export default Message;
// {`${classes.message} ${classes.active}`}
