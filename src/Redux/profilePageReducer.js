import { profileAPI } from "../Api/Api";


const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi it's my first post!", likesCount: 12 },
    { id: 2, message: "A longread about my summer trip", likesCount: 12 },
    { id: 3, message: "Hello there!", likesCount: 12 },
  ],
  // newPostText: "kitty",
profile: null,
status: " "
  };
   
const profilePageReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 23,
      };
return{
  ...state,
  posts:[...state.posts, newPost],
  // newPostText: " ",
}}
case DELETE_POST:{
  return {...state,
    posts:state.posts.filter(p=>p.id!=action.postId)
  }}


// let stateCopy = {...state};
// stateCopy.posts = [...state.posts];
// stateCopy.posts.push (newPost);
// stateCopy.newPostText = " ";
// return stateCopy;}
      // state.posts.push(newPost);
      // state.newPostText = " ";
      // return state;
    // case UPDATE_NEW_POST_TEXT:{
    //   return {...state,
    //     newPostText: action.newText
    //   }}
    case SET_STATUS:{
      return {...state,
        status: action.status
      }}
    case SET_USER_PROFILE:{
      return {...state,
        profile: action.profile
      }
      
    }
    default:
      return state;
  
    }};

    export const addPost = (newPost) => ({type: ADD_POST, newPost})
    export const deletePost = (postId) => ({type: DELETE_POST, postId})

    // export const updateNewPostTextActionCreator = (text) => ({
    // type:UPDATE_NEW_POST_TEXT, newText:text});
    export const setUserProfile= (profile) => ({ type: SET_USER_PROFILE, profile});
    export const setStatus= (status) => ({ type: SET_STATUS, status});

 
 

  
    export const getProfile= (userId)=>async (dispatch)=>{
    let data = await profileAPI.getProfile(userId)
          dispatch(setUserProfile(data));
   }

    export const getStatus= (userId)=>async (dispatch)=>{
    let data= await profileAPI.getStatus(userId);
      dispatch(setStatus(data));
   }

    export const updateStatus= (status)=>async (dispatch)=>{
      let data= await profileAPI.updateStatus(status);
      if(data.resultCode===0){
        dispatch(setStatus(status));
      } 
    }
        






 

export default profilePageReducer;
