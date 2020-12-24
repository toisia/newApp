import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "../../../Redux/profilePageReducer";

// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
// debugger;

// let state = props.store.getState();

// let addPost = () => {
//   props.store.dispatch(addPost());
// };

// let onPostChange = (text) => {
//   let action = updateNewPostText(text);
//   props.store.dispatch(action);
// };
//   const MyPostsContainer = () => {
//   return (
//   <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPost());
//         };

//         let onPostChange = (text) => {
//           let action = updateNewPostText(text);
//           store.dispatch(action);
//         };

// return    <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       posts={store.getState().profilePage.posts}
//       newPostText={store.getState().profilePage.newPostText}/>
//     }}
//     </StoreContext.Consumer>
//   )
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    // newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPost(newPost));
    },
    // updateNewPostText: (text) => {
    //   dispatch(updateNewPostText(text));
    // },
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
{
  /* <MyPosts
updateNewPostText={onPostChange}
addPost={addPost}
posts={state.profilePage.posts}
newPostText={state.profilePage.newPostText}
// dispatch={props.dispatch}
/> */
}
