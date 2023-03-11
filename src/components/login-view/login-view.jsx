import React from "react";
import { useState, useEffect } from "react";

export const LoginView = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        // this is to prevent default behaviour of form, which is to reload the page
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };

        fetch("http://jackoc-myflix.onrender.com/login", {
            method: "POST",
            body: JSON.stringify(data)
        });
    };





    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
    };
