import React from "react";
import { connect } from "react-redux";
import {  follow , unfollow, setCurrentPage , followingProgress,requestUsers } from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress, getUserSuper  } from "../../Redux/usersSelectors";

 

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let {currentPage,pageSize} = this.props;
    this.props.requestUsers(currentPage,pageSize);
  }
    
  //   this.props.toggleIsFetching(true);
  //   userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(
  // (data) => {
  //       this.props.toggleIsFetching(false);
  //       this.props.setUsers(data.items);
  //       this.props.setTotalUsersCount(data.totalCount);
  //     });
  

  onPageChanged = (pageNumber) => {
    let {pageSize} = this.props;
      this.props.requestUsers(pageNumber,pageSize);}



    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);

    // userAPI.getUsers(pageNumber,this.props.pageSize)
    //     .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
  
  

  render() {
    return <>
    
     {this.props.isFetching ? <Preloader/> : null}
    <Users 
       totalUsersCount = {this.props.totalUsersCount} 
       pageSize = {this.props.pageSize} 
       currentPage = {this.props.currentPage} 
       onPageChanged={this.onPageChanged} 
       users = {this.props.users} 
       follow={this.props.follow} 
       unfollow={this.props.unfollow }
       followingProgress={this.props.followingProgress}
       followingInProgress={this.props.followingInProgress}
       />
    </>
      }
  
     
    } 

let mapStateToProps = (state) => {
  return {
    // users: getUserSuper(state),
    users: getUsers(state),
    pageSize: getPageSize (state),
    totalUsersCount:  getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress:getFollowingInProgress(state),
  };
}
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress:state.usersPage.followingInProgress,
//   };
// }

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {unfollow,follow , setCurrentPage,
    followingProgress , requestUsers}) )
(UsersAPIComponent)

// export default connect(mapStateToProps, {unfollow,follow , setCurrentPage,
//   followingProgress , getUsers})(UsersAPIComponent);

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//     dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//     dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//     dispatch(toggleIsFetchingAC(isFetching));
//     },

//   }
// }
