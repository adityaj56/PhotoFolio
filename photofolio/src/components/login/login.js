// import loginStyle from './login.module.css';
import {useState} from 'react';
// import axios from 'axios';

export default function LoginForm(){
    const [formData, setFormData] = useState({email: "", password: ""});

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData.email, formData.password);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
               <label htmlFor="email">Email</label>
               <input type="email" id="email" value={formData.email} onChange={(e)=>setFormData({email: e.target.value, password: formData.password})} required></input>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type='password' id='password' value={formData.password} onChange={(e)=>setFormData({email: formData.email, password: e.target.value})} required></input>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}