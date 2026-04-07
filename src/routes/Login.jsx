import DefaultLayout from "../auth/layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                // guardar usuario 
                auth.login({
                    user: data.user,
                    token: data.token
                });
            } else {
                console.log("Error:", data.message);
            }

        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    if (auth.isAuthenticated) {
    
        return <Navigate to="/dashboard" />;
    }
 
    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit}>
                ...
            </form>
        </DefaultLayout>
    );

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </DefaultLayout>
    );
}


