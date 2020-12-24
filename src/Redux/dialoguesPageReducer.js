const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let inialState = {
  messages: [
    { id: 1, message: "Hi! How are you?" },
    { id: 2, message: "Hello There" },
    { id: 3, message: "We are cool!" },
    { id: 4, message: "Yo! How are you?" },
    { id: 5, message: "There is an apple" },
    { id: 6, message: "How are you?" },
  ],
  // newMessageText: " ",
  dialogues: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
};
 
const dialoguesPageReducer = (state = inialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 7,
        message: action.newMessage,
      };
      // let stateCopy = { ...state };
      // stateCopy.messages = [ ...state.messages ];

      return {
        ...state,
        // newMessageText: " ",
        messages:[ ...state.messages, newMessage]
      };
    }
      // stateCopy.messages.push(newMessage);
      // stateCopy.newMessageText = " ";
      // return stateCopy;

    // state.messages.push(newMessage);
    // state.newMessageText = " ";
    // return state;
    // case UPDATE_NEW_MESSAGE_TEXT: {
    //   return { ...state,
    //     newMessageText: action.newText,
    //   };
      // stateCopy.newMessageText = action.newText;
      // return stateCopy;
    // }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});
// export const updateNewMessageTextActionCreator = (text) => ({
//   type:UPDATE_NEW_MESSAGE_TEXT,
//   newText:text})

export default dialoguesPageReducer;
