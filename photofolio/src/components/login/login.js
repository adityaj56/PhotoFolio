// import loginStyle from './login.module.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email: "", password: ""});

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(formData.email, formData.password);
        await axios.post('http://localhost:3030/v1/user/create-session', {
               email: formData.email,
               password: formData.password
            }).then(function(response){
               console.log(response.data.token);
               axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
               navigate('/home');
            }).catch(function (error){
               console.log(error);
            });
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