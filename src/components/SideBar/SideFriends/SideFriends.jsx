import React from "react";
import FriendsItem from "./SideFriendsItem/SideFriendsItem";

// import classes from "./Friends.module.css";

const Friends = (props) => {
  
  return (
    <div>
      Friends
      <FriendsItem friends={props.friends} />
    </div>
  );
};

export default Friends;