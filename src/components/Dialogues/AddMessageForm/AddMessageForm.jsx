import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './AddMessageForm.module.css';

  
  
   const validationSchema = Yup.object({
    newMessage:Yup.string()
     .max(50, 'Must be 50 characters or less')
     .required("Required"),
    
   }) 
  const initialValues= {
    newMessage: '',
            };

  // const  onSubmit= (values, onSubmitProps, props) => {
  //   alert(values.newMessage)
  //   props.sendMessage(values.newMessage);
  //   console.log(values) 
  // console.log("submit props", onSubmitProps)
  
  // onSubmitProps.setSubmitting(false)
  // } 
  
 const AddMessageFormS = (props) => {




    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        

        
        onSubmit={(values, onSubmitProps, sendMessage) => {
          // alert(values.newMessage)
          props.sendMessage(values.newMessage);
          console.log(values) 
        console.log("submit props", onSubmitProps)
        
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        
        }}>
          
        
          {
          formik=> {
            console.log("Formik props", formik)
            return(

      <Form>
        <div>
        <label htmlFor="newMessage"></label>
        <Field
          id="message"
          name="newMessage"
          type="text"
          as="textarea"
          placeholder={"Enter your message"}
                 />
        <ErrorMessage  name="newMessage"/>
         </div>
        
          
        <div>
        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Send message</button>
        </div>
       </Form>
        )}}
      </Formik>
    );
  };
  




 
  
//           const Login = (props) => {
//             return <div >
//             <h1>Login</h1>
//             <LoginForm/>
           
            
//             </div>
//             }      




export default AddMessageFormS

