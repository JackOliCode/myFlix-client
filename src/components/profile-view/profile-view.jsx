import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Form, Row, Col, } from "react-bootstrap";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { UserView } from "./user-view";
import { UpdateView } from "./update-user";
import { UpdateView } from "./update-user";
import { DeleteUser } from "./delete-user";

export const ProfileView = () => {
    const [user, setUser] = useState(null);
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <UserView user={storedUser} />
            <UpdateView storedToken={storedToken} storedUser={storedUser} />
            <DeleteUser storedToken={storedToken} storedUser={storedUser} />
            
        </>
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