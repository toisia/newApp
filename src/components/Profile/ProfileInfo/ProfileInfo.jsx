import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'
import profileIcon from "../../../assets/images/profileIcon.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks"

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  
  return ( 
  <div>

  <div className={classes.fond}>
      <img src="https://image.freepik.com/free-photo/beautiful-colorful-flower-background-blur-horizontal-spring-concept-toning-selective-focus_1220-1345.jpg"></img>
  </div>
<div>

        <h2>{props.profile.fullName}</h2>
</div>
{/* <div>
  <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
</div> */}
<div>
  <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
</div>
  <div className={classes.ava}> 
  <img
                  src={props.profile.photos.large != null ? props.profile.photos.large : profileIcon}
                  className={classes.userImage}
                />


      {/* <img src={props.profile.photos.large}></img> */}
      <div>{props.profile.aboutMe}</div>
      {/* <img src="https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg"></img> */}
  </div>
  <div>Contacts:</div>
      <div>{props.profile.contacts.facebook}</div>
      <div>{props.profile.contacts.vk}</div>
      <div>{props.profile.contacts.twitter}</div>
      <div>{props.profile.contacts.instagram}</div>
      <div>{props.profile.contacts.github}</div>
      

  </div>
 
  
  
  )
};
 
 export default ProfileInfo