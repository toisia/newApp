import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts =
 React.memo ((props) => {
  console.log("render")
  
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likesCount} key={post.id} />
  ));
  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  //   // props.dispatch(addPostActionCreator());
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // let action = {type:"UPDATE-NEW-POST-TEXT", newText:text};
  // let action = updateNewPostTextActionCreator(text);
  // props.dispatch(action);
  // };

  return (
    <div>
      <h3>My posts</h3>
      <div className={classes.postsBlock}>
        <AddPostForm addPost={props.addPost} />

        {/* <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div> */}
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}
)

export default MyPosts;
