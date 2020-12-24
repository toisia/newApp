import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './AddPostForm.module.css';

  
  
   const validationSchema = Yup.object({
    newPost:Yup.string()
     .max(50, 'Must be 50 characters or less')
     .required("Required"),
    
   }) 
  const initialValues= {
    newPost: '',
            };

  // const  onSubmit= (values, onSubmitProps, props) => {
  //   alert(values.newMessage)
  //   props.sendMessage(values.newMessage);
  //   console.log(values) 
  // console.log("submit props", onSubmitProps)
  
  // onSubmitProps.setSubmitting(false)
  // } 
  
 const AddPostForm = (props) => {




    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        

        
        onSubmit={(values, onSubmitProps) => {
          // alert(values.newPost)
          props.addPost(values.newPost);
          console.log(values) 
          console.log(values.newPost) 
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
          id="post"
          name="newPost"
          type="text"
          as="textarea"
          placeholder={"Enter new post test"}
                 />
        <ErrorMessage  name="newPost"/>
         </div>
        
          
        <div>
        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Add post</button>
        </div>
       </Form>
        )}}
      </Formik>
    );
  };
 
export default AddPostForm

