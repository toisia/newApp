import React from "react";
import classes from "./Users.module.css";
import profileIcon from "../../assets/images/profileIcon.png";
import { NavLink } from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <div>
        <Paginator
          currentPage={props.currentPage}
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          onPageChanged={props.onPageChanged}
        />
      </div>

      {/* <button onClick={getUsers}>Get users</button> */}

      {props.users.map((u) => (
        <div>
          <User
           user={u}
            key={u.id} 
           {...props} />
        </div>
      ))}
    </div>
  );
};

export default Users;

{
  // <div key={u.id}>
  //   <span>
  //     <div>
  //       <NavLink to={"/profile/" + u.id}>
  //         <img
  //           src={u.photos.small != null ? u.photos.small : profileIcon}
  //           className={classes.userImage}
  //         />
  //       </NavLink>
  //     </div>
  //     <div>
  //       {u.followed ? (
  //         <button
  //           disabled={props.followingInProgress.some((id) => id === u.id)}
  //           onClick={() => {
  //             props.unfollow(u.id);
  // props.followingProgress(true, u.id);
  // userAPI.Unfollow(u.id).then((data) => {
  //   if (data.resultCode === 0) {
  //     props.unfollow(u.id);
  //   }
  //   props.followingProgress(false,u.id);
  // axios.delete(
  //   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
  //   { withCredentials: true,
  //     headers:{
  //      "API-KEY":"5d232cb4-0850-4256-adb1-9708e7bf1721"
  //     } }
  // ).then((response) => {
  //   if (response.data.resultCode === 0) {
  //     props.unfollow(u.id);
  //   }
  // });
  //     }}
  //   >
  //     Unfollow
  //   </button>
  // ) : (
  //   <button
  //     disabled={props.followingInProgress.some((id) => id === u.id)}
  //     onClick={() => {
  //       props.follow(u.id);
  // props.followingProgress(true, u.id);
  // userAPI.Follow(u.id).then((data) => {
  //   if (data.resultCode === 0) {
  //     props.follow(u.id);
  //   }
  //   props.followingProgress(false, u.id);
  // axios.post(
  //   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
  //   {},
  //   { withCredentials: true,
  //     headers:{
  //       "API-KEY":"5d232cb4-0850-4256-adb1-9708e7bf1721"
  //      }
  //   }
  // ).then((response) => {
  //   if (response.data.resultCode === 0) {
  //     props.follow(u.id);
  //   }
  // });
  //     }}
  //   >
  //     Follow
  //   </button>
  // )}
  /* </div>
    </span> */
}

{
  // props.setUsers([
  //    id: 1,
  //       photoUrl: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  //       followed: false,
  //       fullName: "Dmitry",
  //       status: "I am a boss",
  //       location: { city: "Minsk", country: "Belarus" },
  //     },
  //     { id: 2,
  //       photoUrl: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  //       followed: true,
  //       fullName: "Karina",
  //       status: "Hello, World",
  //       location: { city: "Moscow", country: "Russia" },
  //     },
  //     { id: 3,
  //       photoUrl: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  //       followed: false,
  //       fullName: "Liza",
  //       status: "Buzy with happiness",
  //       location: { city: "Kiev", country: "Ukrain" },
  //     },
  //     { id: 4,
  //       photoUrl: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  //       followed: false,
  //       fullName: "Arhip",
  //       status: "Fly like a bird",
  //       location: { city: "Warsaw", country: "Poland" },
  //     },
  // ]
  //     )
  //   return (
  //     <div>
  //         <button onClick={getUsers}>Get users</button>
  //       {props.users.map((u) => (
  //         <div key={u.id}>
  //           <span>
  //             <div>
  //               <img src={u.photos.small !=null ? u.photos.small:profileIcon } className={classes.userImage} />
  //             </div>
  //             <div>
  //               {u.followed ? (
  //                 <button
  //                   onClick={() => {
  //                     props.unfollow(u.id);
  //                   }}
  //                 >
  //                   Unfollow
  //                 </button>
  //               ) : (
  //                 <button
  //                   onClick={() => {
  //                     props.follow(u.id);
  //                   }}
  //                 >
  //                   Follow
  //                 </button>
  //               )}
  //             </div>
  //           </span>
  //           <span>
  //             <span>
  //               <div>{u.name}</div>
  //               <div>{u.status}</div>
  //             </span>
  //             <span>
  //               <div>{"u.location.country"}</div>
  //               <div>{"u.location.city"}</div>
  //             </span>
  //           </span>
  //         </div>
  //       ))}
  //     </div>
  //   );}}
  // }}
}
