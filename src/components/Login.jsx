import React from 'react';
import Header from './Header';
import SignIn from './SignIn.jsx';

const Login = () => {
    return (
        <div className=''>
            <Header />
            <div className='absolute'><img src="src\assets\bgdrop.jpg" alt="bgdrop" /></div>
            <SignIn />
        </div>
    );
};

export default Login;