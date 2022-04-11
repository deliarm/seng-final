import React, {useState} from 'react';
import "./login.css";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () =>{
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser.setLoginUser(res.data.user)
            navigate("/")
        })
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={user.email} placeholder='Enter your email' onChange={changeHandler}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={changeHandler}/>
            <div className='button' onClick={login}>Login</div> 
            <div>or</div>
            <div className='button' onClick={() => navigate("/signup")}>Create an account</div>
        </div>
    )
}

export default Login