import React from "react";
import classes from "./FriendsPost.module.css";

const FriendsPost = (props) => {
  return (
    <div className={classes.bar}>
      <div className={classes.item}>
        <div>
          <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"></img>
        </div>
        <div>{props.name}</div>
      </div>
      {/* <div><span>{props.likeAmount}</span></div> */}
    </div>
  );
};

export default FriendsPost;
