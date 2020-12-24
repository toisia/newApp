
import classes from './Login.module.css';
import React from "react";
import classes from "./Dialogues.module.css";
import Login from "./Login";
import {
  login
} from "../../Redux/authReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
 

// let mapStateToProps = (state) => {
//   return {
    // dialoguesPage: state.dialoguesPage,
    // isAuth:state.auth.isAuth,
    // newMessageText:state.dialoguesPage.newMessageText,
//   };
// };

// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (newMessage) => {
//       dispatch(addMessageActionCreator(newMessage));
//     },
    // updateNewMessageText: (text) => {
    //   dispatch(updateNewMessageTextActionCreator(text));
    // },
//   };
// };
//  export default compose(
//   connect(null,{login}),
//   withAuthRedirect 
// )(Login)
