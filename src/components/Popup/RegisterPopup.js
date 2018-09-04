import React from 'react';
import './Popup.css';

class RegisterPopup extends React.Component{

    render(){

    const {registerSwitch, registerClose} = this.props;

    const handleBounds = (e) => {
        if(!this.node.contains(e.target)){
            registerClose();
        }
    }
    
    return(
        <div className='popup' onClick={handleBounds}>
            <div className='popup_inner' ref={node => {this.node = node;}}>
                <h1 className='header'>Register Here:</h1>
                <p className='mini_header'>Name:</p>
                <input type='text' name='firstname' className='form'></input>
                <p className='mini_header'>Email:</p>
                <input type='email' name='email' className='form'></input>
                <p className='mini_header'>Username:</p>
                <input type='text' name='username' className='form'></input>
                <p className='mini_header'>Password:</p>
                <input type='password' name='password' className='form'></input>
                <button className='submit'>Submit</button>
                <p className='link'>Already Registered? Click</p>
                <p className='switch' onClick={registerSwitch}>Here</p>
            </div>
        </div>
    );}
}

export default RegisterPopup;
