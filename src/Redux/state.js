import dialoguesPageReducer from "./dialoguesPageReducer";
import profilePageReducer from "./profilePageReducer";
// import friensSideBarReducer from "./friensSideBarReducer";


// const ADD_POST = "ADD_POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi it's my first post!", likesCount: 12 },
        { id: 2, message: "A longread about my summer trip", likesCount: 12 },
        { id: 1, message: "Hello there!", likesCount: 12 },
      ],
      newPostText: "toisia",
    },
    dialoguesPage: {
      messages: [
        { id: 1, message: "Hi! How are you?" },
        { id: 2, message: "Hello There" },
        { id: 3, message: "We are cool!" },
        { id: 4, message: "Yo! How are you?" },
        { id: 5, message: "There is an apple" },
        { id: 6, message: "How are you?" },
      ],
      newMessageText:"my darling)",
      dialogues: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
    },
    friendsSideBar: {
      friends: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state has been chanched");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // dispatch(action) {
    // this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    // this._state.dialoguesPage = dialoguesPageReducer(this._state.dialoguesPage, action);
    // this._state.friendsSideBar = friensSideBarReducer(this._state.friendsSideBar, action);

      // this._callSubscriber(this._state); 
},


// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// };

// export const addPostActionCreator = () => ({type: ADD_POST});

//     export const updateNewPostTextActionCreator = (text) => ({
//     type:UPDATE_NEW_POST_TEXT, newText:text});


// export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
// export const updateNewMessageTextActionCreator = (text) => ({
//   type:UPDATE_NEW_MESSAGE_TEXT,
//   newText:text})





export default store;
