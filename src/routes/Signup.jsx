import DefaultLayout from "../auth/layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

export default function Signup() {
    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:4000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email: userEmail,
                    password
                })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                auth.login(data);
            } else {
                console.log(data.message);
            }
    
        } catch (error) {
            console.error(error);
        }
    };

    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 

                    <label>Email</label>
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                    
                    <label> Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>


                    <button type="submit" value={password}>Create User</button>
            </form>
        </DefaultLayout>
    );
    
}




