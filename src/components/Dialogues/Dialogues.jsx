import React from "react";
import classes from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Redirect } from "react-router-dom";
import AddMessageFormS from "./AddMessageForm/AddMessageForm"



 

const Dialogues = (props) => {
  let state = props.dialoguesPage;
 
  let dialogElements = state.dialogues.map((dialog) => (
    <DialogueItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
 
  // let newMessageElement = React.createRef();

  // let onSendMessage = () => {
  //   props.sendMessage();
  //   // props.dispatch(addMessageActionCreator());
  // };
  // let addNewMessage =()=>{

  // }
 
  // let onMessageChange = () => {
  //   let text = newMessageElement.current.value;
  //   props.updateNewMessageText(text);
  //   // let action = updateNewMessageTextActionCreator(text);
  // };

  
//   const validationSchema = Yup.object({
//     newMessage:Yup.string()
//      .max(50, 'Must be 50 characters or less')
//      .required("Required"),
    
//    }) 
//   const initialValues= {
//     newMessage: '',
//             };

//   const  onSubmit= (values, onSubmitProps ) => {
//     // alert(values.newMessage)
//     props.sendMessage(values.newMessage);
//     console.log(values.newMessage) 
//   // console.log("submit props", onSubmitProps)
  
//   onSubmitProps.setSubmitting(false)
//   } 
  
//  const AddMessageForm = (props) => {




//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}>
        
//           {
//           formik=> {
//             console.log("Formik props", formik)
//             return(

//       <Form>
//         <div>
//         <label htmlFor="newMessage"></label>
//         <Field
//           id="message"
//           name="newMessage"
//           type="text"
//           as="textarea"
//           placeholder={"Enter "}
//                  />
//         <ErrorMessage  name="newMessage"/>
//          </div>
        
          
//         <div>
//         <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Send</button>
//         </div>
//        </Form>
//         )}}
//       </Formik>
//     );
//   }; 





  // if (!props.isAuth) return <Redirect to ={"/login"}/>;

  return (
    
    <div className={classes.dialogues}>
     
      <div className={classes.dialogueItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
      {/* <AddMessageForm />   */}
      <AddMessageFormS sendMessage={props.sendMessage} />  






        {/* <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.dialoguesPage.newMessageText}
          />
        </div>
        <div>
          <button onClick={onSendMessage}>Add message</button>
        </div> */}
       
      </div>
    </div>
  );
};
// 


         

export default Dialogues;
// {`${classes.message} ${classes.active}`}
