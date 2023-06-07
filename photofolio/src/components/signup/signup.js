import { useState } from "react";

export default function SignUpForm(){
    const [formData, setFormData] = useState({name: "", email: "", password: "", confirm_password: ""});

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData.name, formData.email, formData.password);
        setFormData({name: "", email: "", password: "", confirm_password: ""});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Sign-Up</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} required></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} required></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})}></input>
            </div>
            <div>
                <lable htmlFor="con-password">Confirm Password</lable>
                <input type="password" id="con-password" value={formData.confirm_password} onChange={(e)=>setFormData({...formData, confirm_password: e.target.value})}></input>
            </div>
            <button type="submit">Sign-Up</button>
        </form>
    )
}