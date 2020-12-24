import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/profilePageReducer";
import {withRouter} from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
 
class  ProfileContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = this.props.authorizedUserId;
      if (!userId){
        this.props.history.push("/login")
      }
    }

    this.props.getProfile(userId);
  this.props.getStatus(userId)
    // axios
    // .get(
    //   `https://social-network.samuraijs.com/api/1.0/profile/` + userId
    // )
    // .then((data) => {
    //   this.props.setUserProfile(data);
    }


  render() {
    
    return (

    
      <Profile {...this.props} 
      // profile={this.props.profile}
      // updateStatus =  {props.updateStatus}
      />
     )
}};

// let AuthRedirectComponent = withAuthRedirect (ProfileContainer);

// let mapStateToPropsForRedirect = (state)=>({
//   isAuth:state.auth.isAuth,
// })

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

// let AuthRedirectComponent =(props)=>{
//   if (!this.props.isAuth) return <Redirect to ={"/login"}/>;
//   return <ProfileContainer props={...props}/>
// }
 
let mapStateToProps = (state)=>({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.userId,

})

export default compose (
  connect(mapStateToProps,{ getProfile , getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect 
)(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);





// export default connect (mapStateToProps,{ getProfile})(WithUrlDataContainerComponent)
