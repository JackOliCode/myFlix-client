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
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json()) //This transforms the response content into a JSON object.
        .then((data) => {
            console.log("Login Response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token); //You pass the user and token back to MainView so that they can be used
            } else {
                alert("No such user");
            }
        })
        .catch((e) => {
            alert("Something went wrong");
        });
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
    };
