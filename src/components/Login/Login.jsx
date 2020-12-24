import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css';
import {login, setError} from "../../Redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
  
  // const validate = values => {
  //   const errors = {};
  //   if (!values.login) {
  //     errors.login = 'Required';
  //   } else if (values.login.length > 15) {
  //     errors.login = 'Must be 15 characters or less';
  //   }
  
  //   if (!values.password) {
  //     errors.password = 'Required';
  //   } else if (values.password.length > 20) {
  //     errors.password = 'Must be 20 characters or less';
  //   }
  
  //   return errors;
  // };  
  
   const validationSchema = Yup.object({
     email:Yup.string()
     .max(30, 'Must be 30 characters or less')
     .min(2, 'Must be more than 2 characters ')
     .required("Required"),
     password:Yup.string()
     .max(15, 'Must be 15 characters or less')
     .min(2, 'Must be more than 2 characters ')
     .required("Required"),
   }) 
  const initialValues= {
    
            email: '',
            password: '',
            toggle: false,
            
            };
 
  // const  onSubmit= (values, onSubmitProps) => {
  //   console.log(values.email, values.password,values.toggle)
  //   login(values.email, values.password,values.toggle)
  // // console.log("submit props", onSubmitProps)
  // // console.log("toggle status", values.toggle)
  
  // // console.log("checked props", checked)
  // onSubmitProps.setSubmitting(false)
  // } 
    
//  const Error = (meta)=>{
//    return(
//      <div className={classes.errorMessage}>
      
//      </div>
//    )  
//  }
  // const  onSubmit= values => {
  //   console.log(values) }        

  export const LoginForm = (props) => {
    
    return (
      <Formik
      
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, onSubmitProps) => {
          // actions.setStatus(undefined);
          // console.log(values.email, values.password,values.toggle)
          props.login(values.email, values.password,values.toggle)
        console.log("submit props", onSubmitProps)
        console.log("value props", values)
        // console.log("toggle status", values.toggle)
        
        onSubmitProps.setSubmitting(false)
        } }

        // onSubmit={onSubmit}
        >
        
          {
          formik=> {
            console.log("Formik props", formik.error)
            return(

      <Form className={classes.form}>
        <div>
        <label htmlFor="email"></label>
        <Field
        className={classes.field}
          id="email"
          name="email"
          type="text"
          placeholder={"E-Mail"}
                 />
                 <span  className={classes.errorMessage} >

        <ErrorMessage  name="email"/>
                 </span>
       
        </div>
        <div>

        <label htmlFor="password"></label>
        <Field
        className={classes.field}
          id="password"
          name="password"
          type="text"
          placeholder={"Password"}
                   />
                   <span>

        <ErrorMessage 
        // render={message => <div style={{color: 'red'}}></div>}
        // render={() => <div>{props.errors.password}</div>}
          // component={Error} 
        className={classes.errorMessage} 
        name="password"/>
                   </span>
        
          </div>
          <div>
          <Field 
        className={classes.checkbox}
          type="checkbox" name="toggle" />
          <label htmlFor="checkbox">{"remember me"}</label>
          </div>
         
        <div>
        <button className={classes.button} type="submit" disabled={!formik.isValid || formik.isSubmitting}>Login</button>
        </div>
        {/* {status && status.email ? (
            <div>API Error: {status.email}</div>
          ) : (
            errors.email && <div>Validation Error: {errors.email}</div>
          )}

          {status && status.password ? (
            <div>API Error: {status.password}</div>
          ) : (
            errors.password && <div>Validation Error: {errors.password}</div>
          )} */}
       </Form>
        )}}
      </Formik>
    );
  };
  




 
  
          const Login = (props) => {
           if (props.isAuth){
             return <Redirect to ={"/profile"}/>
           }
           
           
           return <div >
            <h1>Login</h1>
            <LoginForm login={props.login} />
           
            
            </div>
            }      


        let    MapStateToProps=(state)=>{
          return {
          isAuth:state.auth.isAuth,
          messages:state.auth.messages
 
        }}

export default connect(MapStateToProps,{login})(Login)
