import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
// import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
// import DialoguesContainer from "./components/Dialogues/DialoguesContainer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp} from "./Redux/appReducer";
import React from "react";
import { connect, Provider } from "react-redux";
import { withRouter,BrowserRouter,Route } from "react-router-dom";
import { compose } from "redux";
import store from "./Redux/reduxStore";
import { withSuspense } from "./hoc/withSuspense";






const News = React.lazy(() => import('./components/News/News'))
const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'));


class MainApp extends React.Component  {
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if (!this.props.initialized){
      return <Preloader/>
    }
 
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <SideBar />
      <div className="appWrapperContent">
        <Route path="/dialogues" render={withSuspense (DialoguesContainer)} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />


        
        {/* <Route path="/dialogues" render={() => <DialoguesContainer store={props.store}/>} />
          <Route path="/profile" render={() => <Profile store={props.store}/>} /> */}

        {/* <Route path="/dialogues" render={() => <Dialogues dial={props.state.dialoguesPage} dispatch={props.dispatch} newMessageText={props.state.dialoguesPage.newMessageText}/>} /> */}
        {/* <Route path="/profile" render={() => <Profile profiles={props.state.profilePage.posts} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText}/>} /> */}
        <Route path="/news" render={() => {
              return <React.Suspense fallback ={<div>Loading...</div>}>
               <News/>
               </React.Suspense>} 
        } />
        <Route path="/music" render={() => <Music />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route
          path="/friends"
          render={() => (
            <Friends friends={this.props.state.friendsSideBar.friends} />
          )}
        />
      </div>
    </div>
  );
};
};

const MapStateToProps = (state)=>({
    initialized: state.app.initialized
  }
)

 let AppContainer =  compose (
withRouter ,
connect(MapStateToProps,{ initializeApp}))(MainApp)

let  App=(props)=>{
  return  <BrowserRouter>
  <Provider store ={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>
}
export default App;