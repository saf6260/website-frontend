import React from 'react';
import './Popup.css';

class RegisterPopup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            username: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onButtonSubmit = ({signIn}) => {
        fetch('https://blooming-shelf-57010.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                username: this.state.username
            })
        })
            .then(response => response.json())
            .then(resp => {
                console.log('success');
                signIn;

            })
           .catch(err => { 
              alert("Error registering user. Please try again later.");
              console.log(err);
           })
    }

    render(){

    const {registerSwitch, registerClose, signIn} = this.props;

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
                <input 
                    type='text' 
                    name='firstname' 
                    className='form'
                    onChange={this.onNameChange}
                ></input>
                <p className='mini_header'>Email:</p>
                <input 
                    type='email' 
                    name='email' 
                    className='form'
                    onChange={this.onEmailChange}
                ></input>
                <p className='mini_header'>Username:</p>
                <input 
                    type='text' 
                    name='username' 
                    className='form'
                    onChange={this.onUsernameChange}
                ></input>
                <p className='mini_header'>Password:</p>
                <input 
                    type='password' 
                    name='password' 
                    className='form'
                    onChange={this.onPasswordChange}
                ></input>
                <button 
                    className='submit'
                    onClick={() => this.onButtonSubmit(signIn)}
                >
                    Submit
                </button>
                <p className='link'>Already Registered? Click</p>
                <p className='switch' onClick={registerSwitch}>Here</p>
            </div>
        </div>
    );}
}

export default RegisterPopup;
