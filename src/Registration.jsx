import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    const handleRegistration = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/main");
        } catch (error) {
            console.error("Error during registration:", error.message);
            alert("Error during registration. Please try again.");
        }
    };

    return (
        <div className="main-div">
            <div className="main-heading">
                <h1>TODOs</h1>
            </div>
            <div className="login-form">
                <h2 className="heading-sm">Registration</h2>
                <form onSubmit={handleRegistration}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="newInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        className="newInput"
                    />
                    <input
                        type="text"
                        placeholder="Contact"
                        className="newInput"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="newInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="newInput"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="newButton">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;



