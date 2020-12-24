import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogues.module.css";

const DialogueItem = (props) => {
  let path = "/dialogues/" + props.id;
  return (
    <div className={classes.dialogue}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
 
export default DialogueItem;
// {`${classes.message} ${classes.active}`}

