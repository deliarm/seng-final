import React, {useState} from 'react';
import Login from '../components/login/login'
import "./loginpage.css"

const LoginPage = (setLoginUser) => {

    return(
        <div className='loginpage'>
            <Login setLoginUser={setLoginUser}/>
        </div>
    )
}

export default LoginPage