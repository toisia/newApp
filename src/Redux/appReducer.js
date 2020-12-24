import { authAPI } from "../Api/Api";
import { authorize } from "./authReducer";

const INITIALIZED = "INITIALIZED";

let inialState = {
  initialized : false,
};

const appReducer = (state = inialState, action) => {
  switch (action.type) {
    case INITIALIZED: {
      return {
        ...state,
       initialized: true
              };
    }
    default:
      return state;
  }
};
 
export const ininalizationCompleted = () => ({type: INITIALIZED})



export const initializeApp =()=>(dispatch)=>{
  let promise = dispatch(authorize ());
  promise.then(() =>{
    dispatch(ininalizationCompleted())})}





export default appReducer;


