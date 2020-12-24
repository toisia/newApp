import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  
  return   <div>
    
  <div className={classes.item}>
    <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"></img>
    {props.message}
    </div>
    <div><span>{props.likeAmount}</span></div>
  
  
  </div>
};
 
 export default Post