import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';
import './TopBar.css';

const TopBar = ({changeRoute, loginClicked, registerClicked, registerPopup, loginPopup, registerClose, loginClose, changeHome, signedIn}) => {
    return(
        <div className = 'bb fixed'>
            <Title 
                changeRoute={changeHome}
            />
            <Navigation 
                isSignedIn={signedIn} 
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
