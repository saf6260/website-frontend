import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';
import Sprint from './components/Sprint/Sprint';
import RegisterPopup from './components/Popup/RegisterPopup';
import LoginPopup from './components/Popup/LoginPopup';

import {changeEducation, changeWork, changeProjects, changeActivities, login, changeCurrentRoute, popupRegister, popupLogin, popupRegisterClose, popupLoginClose, loginSwitch, registerSwitch} from './actions'

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isSignedIn: state.login.isSignedIn,
        education: state.changeNumber.education,
        work: state.changeNumber.work,
        skills: state.changeNumber.skills,
        projects: state.changeNumber.projects,
        activities: state.changeNumber.activities,
        route: state.changeRoute.route,
        registerPopup: state.activatePopup.registerPopup,
        loginPopup: state.activatePopup.loginPopup,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (event) => dispatch(login(event.target.value)),
        onChangeEducation: (event) => dispatch(changeEducation(event)),
        onChangeWork: (event) => dispatch(changeWork(event)),
        onChangeProjects: (event) => dispatch(changeProjects(event)),
        onChangeActivities: (event) => dispatch(changeActivities(event)),
        onRouteChange: (event) => dispatch(changeCurrentRoute(event)),
        onRegisterClick: () => dispatch(popupRegister()),
        onLoginClick: () => dispatch(popupLogin()),
        onRegisterClose: () => dispatch(popupRegisterClose()),
        onLoginClose: () => dispatch(popupLoginClose()),
        onLoginSwitch: () => dispatch(loginSwitch()),
        onRegisterSwitch: () => dispatch(registerSwitch()),
    }
}

class App extends Component {

    render() {
        const {onChangeEducation, onChangeWork, onChangeProjects, onChangeActivities, education, work, skills, projects, activities, route, onRouteChange, onLoginClick, onRegisterClick, registerPopup, loginPopup, onLoginClose, onRegisterClose, onLoginSwitch, onRegisterSwitch, isSignedIn} = this.props
        const changeRoute = () => {
            if(registerPopup){
                onRegisterClose();
            }else if(loginPopup){
                onLoginClose();
            }
            onRouteChange('sprint');
        }

        const changeHome = () => {
            if(registerPopup){
                onRegisterClose();
            }else if(loginPopup){
                onLoginClose();
            }
            onRouteChange('home');
        }

      return (
          <div>
              <TopBar 
                  signedIn={isSignedIn}
                  changeRoute={changeRoute}
                  changeHome={changeHome}
                  loginClicked={onLoginClick}
                  registerClicked={onRegisterClick}
                  registerPopup={registerPopup}
                  loginPopup={loginPopup}
                  registerClose={onRegisterClose}
                  loginClose={onLoginClose}
              />
                { route === 'home' ?
                    <Main 
                        changeEdu={onChangeEducation}
                        changeWork={onChangeWork}
                        changeProj={onChangeProjects}
                        changeAct={onChangeActivities}
                        edu={education}
                        work={work}
                        skill={skills}
                        proj={projects}
                        act={activities}
                        className='main'
                        />
                    :( 
                        <div>
                            <h1>Testing</h1>
                            <Sprint />
                        </div>
                    )
                }
                {registerPopup ? 
                        <RegisterPopup 
                            registerClose={onRegisterClose}
                            registerSwitch={onRegisterSwitch}
                            signIn={login}
                        />
                        : null
                }
                {loginPopup ? 
                        <LoginPopup 
                            loginClose={onLoginClose}
                            loginSwitch={onLoginSwitch}
                        />
                        : null
                }
            </div>
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
