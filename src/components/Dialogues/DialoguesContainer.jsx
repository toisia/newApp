import React from "react";
import classes from "./Dialogues.module.css";
import Dialogues from "./Dialogues";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialoguesPageReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import {
//   addMessageActionCreator,
//   updateNewMessageTextActionCreator,
// } from "../../Redux/state";


// const DialoguesContainer = (props) => {
//   let state = props.store.getState().dialoguesPage;

//   let sendMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = (text) => {
//     // let text = newMessageElement.current.value;
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   };
// const DialoguesContainer = () => {
//   return (
//      <StoreContext.Consumer>
//     {(store) => {

//   let state = store.getState().dialoguesPage;

//   let sendMessage = () => {
//     store.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = (text) => {
//     // let text = newMessageElement.current.value;
//     store.dispatch(updateNewMessageTextActionCreator(text));
//   };
//    return <Dialogues
//       updateNewMessageText={onMessageChange}
//       sendMessage={sendMessage}
//       dialoguesPage={store.getState().dialoguesPage}
//       newMessageText={store.getState().dialoguesPage.newMessageText}/>;

// }}
// </StoreContext.Consumer>
//   )
// };


// let AuthRedirectComponent = (props)=>{
//   if (!this.props.isAuth) return <Redirect to ={"/login"}/>;
//   return <Dialogues props={...props}/>
// }




let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
    // isAuth:state.auth.isAuth,
    // newMessageText:state.dialoguesPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
    // updateNewMessageText: (text) => {
    //   dispatch(updateNewMessageTextActionCreator(text));
    // },
  };
};
 export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect 
)(Dialogues)


// let AuthRedirectComponent = withAuthRedirect (Dialogues);


// const DialoguesContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

// export default DialoguesContainer;
{
  /* // Dialogues
  //     updateNewMessageText={onMessageChange}
  //     sendMessage={sendMessage}
  //     dialoguesPage={state}
  //     newMessageText={state.newMessageText}
  //     //  ref={newMessageElement}
  //     //  value={props.newMessageText}
  //   /> */
}

{
  /* // {`${classes.message} ${classes.active}`} */
}
