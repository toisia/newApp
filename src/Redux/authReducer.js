import { authAPI } from "../Api/Api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR = "SET_ERROR";

let inialState = {
  userId : null,
  email:null,
  login: null,
  isAuth: false,
  isFetching: true,  
  
};

const authReducer = (state = inialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        // isAuth: true
              };
    }
    
    default:
      return state;
  }
};
 
export const setAuthUserData = (userId,login,email,isAuth) => ({type: SET_USER_DATA, data:{userId,email,login,isAuth}})



export const authorize =()=> async (dispatch)=>{
   let data= await authAPI.getAuth();
      if (data.resultCode === 0){
      let {id,login,email} = data.data;
      dispatch(setAuthUserData(id,login,email , true))}}

export const login =(email, password, rememberMe )=>async (dispatch)=>{
    let data  = await authAPI.login(email, password, rememberMe)
       dispatch(authorize())
  }

export const logout =()=> async(dispatch)=>{
  let data  = await authAPI.logout()
    dispatch(setAuthUserData(null,null,null , false))
  }
 

export default authReducer;


