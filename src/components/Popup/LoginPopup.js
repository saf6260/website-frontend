import React from 'react';
import './Popup.css';

class LoginPopup extends React.Component {

    render(){
        const {loginSwitch, loginClose} = this.props;

        const handleBounds = (e) => {
            if(!this.node.contains(e.target)){
                loginClose();
            }
        }

        return(
        <div 
            className='popup'
            onClick={handleBounds}
        >
            <div className='popup_inner' ref={node => {this.node = node;}}>
                <h1 className='header'>Sign In Here:</h1>
                <h2 className='header2'>Welcome Back!</h2>
                <p className='mini_header'>Email:</p>
                <input type='email' name='email' className='form'></input>
                <p className='mini_header'>Password:</p>
                <input type='password' name='password' className='form'></input>
                <button className='submit'>Submit</button>
                <br></br>
                <p className='link'><a href=''>Forgot Your Password?</a></p>
                <p className='link'>Not registered? Click </p>
                <p 
                    className='switch oneline'
                    onClick={loginSwitch}
                >
                    Here
                </p>
            </div>
        </div>
    );}
} 

export default LoginPopup;
