import React, {useState} from 'react';
import "./signup.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const signedUp = () => {
        const  {name, email, password, reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            
            axios.post("http://localhost:9002/signup", user)
            .then(res => alert(res.data.message))
            navigate("/")
        }
        else{
            alert("invalid")
        }
        
    }
    return (
        <div className='signup'>
            <h1>Create Account</h1>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={user.name} placeholder='Enter your Name' onChange={changeHandler}/>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={user.email} placeholder='Enter your email' onChange={changeHandler}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={changeHandler} />
            <label htmlFor="">Re-enter Password</label>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter your password' onChange={changeHandler} />
            <div className='button' onClick={signedUp}>Signup</div>
            <div>or</div>
            <div className='button' onClick={() => navigate("/")}>Already have an account?</div>
        </div>
    )
}

export default Signup