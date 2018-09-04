import React from 'react';
import './Navigation.css';

const general = (changeRoute) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'center', background: 'transparent'}}>
            <div className = 'dropdown'>
                <span className = 'f4 dim ph4 pointer pv2'>
                    Projects
                </span>
                <div className = 'dropdown-content'>
                    <p className = 'f4 dim pointer ph4' onClick={() => changeRoute('sprint')}>
                            Sprint Breakdown
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        <a 
                            href='https://smart-brain-saf.herokuapp.com/'
                            className='black no-underline'
                            style={{background:'transparent'}}
                        >
                            Face Recognition
                        </a>
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        <a
                            href='http://www.scottalexf.com/old_website/index_old/index.html'
                            className='black no-underline'
                            style={{background:'transparent'}}
                        >
                            Old Website
                        </a>
                    </p>
                </div>
            </div>
            <div className = 'dropdown'>
                <span className = 'f4 dim ph4 pointer pv2'>
                    Resume
                </span>
                <div className = 'dropdown-content'>
                    <p className = 'f4 dim pointer ph4'>
                        <a 
                            href='https://www.dropbox.com/s/qksc7n97pm7pypp/Scott%20Frauenknecht%20Resume-Fall%202018.pdf?dl=0'
                            className='black no-underline'
                            style={{background: 'transparent'}}
                        >
                            View Resume
                        </a>
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        <a 
                            href='https://www.dropbox.com/s/qksc7n97pm7pypp/Scott%20Frauenknecht%20Resume-Fall%202018.pdf?dl=1'
                            className='black no-underline'
                            style={{background: 'transparent'}}
                        >
                            Download Resume
                        </a>
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        <a 
                            href='https://www.linkedin.com/in/scott-frauenknecht-89256a14a/'
                            className='black no-underline'
                            style={{background: 'transparent'}}
                        >
                            Linkedin
                        </a>
                    </p>
                    <p className= 'f4 dim pointer ph4'>
                        <a 
                            href='https://github.com/saf6260'
                            className='black no-underline'
                            style={{background: 'transparent'}}
                        >
                            Github
                        </a>
                    </p>
                </div>
            </div>
        </nav>
    );
}

const checkClose = (route, loginPopup, registerPopup, registerClose, loginClose) => {
    if(loginPopup){
        loginClose();
        route();
    } else if(registerPopup){
        registerClose();
        route();
    } else{
        route();
    }
}

const Navigation = ({changeRoute, isSignedIn, registerClicked, loginClicked, registerPopup, loginPopup, registerClose, loginClose}) => {

    if(isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                {general(changeRoute)}
                <div className = 'dropdown'>
                    <span className = 'f4 dim black ph4 pointer pv2'>
                        Hi, Scott
                    </span>
                    <div className = 'dropdown-content'>
                        <p className = 'f4 dim pointer ph4'>
                            Chat
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                {general(changeRoute)}
                <div className = 'dropdown'>
                    <span className = 'f4 dim black ph4 pointer pv2'>
                        Account
                    </span>
                    <div className = 'dropdown-content'>
                        <p 
                            className = 'f4 dim pointer ph4'
                            onClick={() => checkClose(registerClicked, loginPopup, registerPopup, registerClose, loginClose)}
                        >
                            Register
                        </p>
                        <p 
                            className = 'f4 dim pointer ph4'
                            onClick={() => checkClose(loginClicked, loginPopup, registerPopup, registerClose, loginClose)}
                        >
                            Login
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
