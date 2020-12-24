import { StaticRouter } from "react-router-dom";
import {updateObjectsInArray} from "./../components/Users/usersObjectHelper"
import { userAPI } from "../Api/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectsInArray (state.users,action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectsInArray (state.users,action.userId, "id", {followed: false})
          };
          
    // case FOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userId) {
    //         return { ...u, followed: true };
    //       }
    //       return u;
    //     }),
    //   };
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userId) {
    //         return { ...u, followed: false };
    //       }
    //       return u;
    //     }),
    //   };
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const confirmFollow = (userId) => ({ type: FOLLOW, userId });
export const confirmUnfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const followingProgress = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));

    let data = await userAPI.requestUsers(page, pageSize)
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
};

let followUnfollowFlow = async (dispatch, userId, apiMethod,actionCreator)=> {
  dispatch(followingProgress(true, userId));
  let data = await apiMethod(userId)
    if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(followingProgress(false, userId));
}




export const follow = (userId) => async (dispatch) => {
   let apiMethod =  userAPI.Follow.bind(userAPI)
   followUnfollowFlow(dispatch, userId, apiMethod,confirmFollow)
      }
    
export const unfollow = (userId) => async (dispatch) => {
  let apiMethod =  userAPI.Unfollow.bind(userAPI);
  followUnfollowFlow(dispatch, userId, apiMethod,confirmUnfollow)
      }




export default usersReducer;
