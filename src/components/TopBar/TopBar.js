import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';
import './TopBar.css';

const TopBar = ({changeRoute, loginClicked, registerClicked, registerPopup, loginPopup, registerClose, loginClose, changeHome}) => {
    return(
        <div className = 'bb fixed'>
            <Title 
                changeRoute={changeHome}
            />
            <Navigation 
                isSignedIn={false} 
                changeRoute={changeRoute} 
                registerClicked={registerClicked}
                loginClicked={loginClicked}
                registerPopup={registerPopup}
                loginPopup={loginPopup}
                loginClose={loginClose}
                registerClose={registerClose}
            />
        </div>
    );
}

export default TopBar;
