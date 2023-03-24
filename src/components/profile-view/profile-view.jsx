import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Form, Row, Col, } from "react-bootstrap";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { UserCard } from "./user-card";
import { UserView } from "./user-view";

export const ProfileView = () => {
    const [users, setUser] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null); // new state variable with initial null value (no user selected)

    useEffect (() => {
        fetch("https://jackoc-myflix.onrender.com/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const usersFromAPI = data.map((doc) => {
            return {
                id: doc._id,
                username: doc.Username,
                email: doc.Email,
                faveMovies: doc.FaveMovies
            };
        });

        setUser(usersFromAPI);
    });
    }, []);

    if (selectedUser) {
        return (
        <UserView userData={selectedUser} onBackClick={() => setSelectedUser(null)} />
        );
    }

    if (users.length === 0) {
        return <div>No user found</div>;
    }

    return (
        <div>
            {users.map((user) => ( // user is the object found by mapping the users array
                <UserCard 
                key={user.id} 
                userData={user} 
                onUserClick={(newSelectedUser) => {
                    setSelectedUser(newSelectedUser);
                    }}
                    /> //this user object is being passed as a prop called userData
                ))}
        </div>
    );
                };




































/*
export const ProfileView = ({movies, onUpdatedUserInfo}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);

 
        useEffect(() => {
            if (!token) {
              return;
            }
            fetch('https://jackoc-myflix.onrender.com/users/${user.Username}', {
            method: "GET",
              headers: { Authorization: `Bearer ${token}` } 
            })
            .then((response) => response.json())
            .then((user) => {
                console.log("books from api:", user);
            });
        }, []);

    }


  /*const favoriteMovieList = movies.filter((movies) => {
        return user.FavoriteMovies.includes(movies._id);

    }); 


    const getUser = () => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitt successful');
      }

    const removeFav =(id) => {

    }

    const handleUpdate = (e) => {

    };

    useEffect(() => {

    }, []);

  return (
<>
    <p>User: {user.Username}</p>
    <p>email: {user.Email}</p> 


        <form className="" onSubmit={(e) => handleSubmit(e)}>
            <h2>Want to change some info?</h2>
            <label>Username:</label>
            <input
                type='text'
                name='Username'
                defaultValue={user.Username}
                onChange={e => handleUpdate(e)} />

            <label>Password</label>
            <input 
                type='password'
                name='password'
                defaultValue={user.Password}
                onChange={e => handleUpdate(e)} />

            <label>E-mail</label>
            <input 
            type="email"
            name="email"
            defaultValue={user.Email}
            onChange={e => handleUpdate(e)} />
            <button variant='primary' type='submit'>
                Update
            </button>
        </form>
</>

*/