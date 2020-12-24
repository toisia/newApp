import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // debugger;
 
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
      updateStatus =  {props.updateStatus}/>
      <MyPostsContainer />

      {/* <MyPostsContainer store={props.store} /> */}

      {/* <MyPostsContainer
        store={props.store}
        posts={props.profiles}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      /> */}
    </div>
  );
};

export default Profile;


