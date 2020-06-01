import React, { Component } from 'react';
import Form from '../form-input/FormInput'
import './SignIn.scss';
import Button from '../button/button';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }

    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = (event)=>{
        const{name, value} = event.target
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Form 
                        name='email' 
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <Form
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <Button type='submit' value='Submit Form' >SIGN IN</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;