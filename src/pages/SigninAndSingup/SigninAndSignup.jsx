import React from 'react';
import './SigninAndSingup.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/sign-up-component'

const SignInAndSingUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSingUp;