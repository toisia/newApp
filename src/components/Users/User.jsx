import React from "react";
import classes from "./Users.module.css";
import profileIcon from "../../assets/images/profileIcon.png";
import { NavLink } from "react-router-dom";


let User = ({user, ...props}) => {
  return (
    <div>
      
        <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : profileIcon}
                  className={classes.userImage}
                />
              </NavLink>
            </div>

            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollow(user.id);

                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.follow(user.id);
                    
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"location country"}</div>
              <div>{"location city"}</div>
            </span>
          </span>
        </div>
    </div>
      )
}

 
export  default User
