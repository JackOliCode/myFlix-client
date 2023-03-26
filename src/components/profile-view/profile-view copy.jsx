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
import { MainView } from "../main-view/main-view";


export const ProfileView = () => {
    const storedToken = localStorage.getItem('token');

  const storedUser = JSON.parse(localStorage.getItem('user'));


    const [usernames, setUsernames] = useState(storedUser? storedUser : null);

    const [selectedUser, setSelectedUser] = useState(null); // new state variable with initial null value (no user selected)

    useEffect (() => {
        fetch('https://jackoc-myflix.onrender.com/users/${user.Username}',
        {
            headers : {
            'Content-Type': 'application/json',
                },
        }
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUsernames(data); {
            return {
                id: usernames._id,
                username: doc.Username,
                email: doc.Email,
                faveMovies: doc.FaveMovies
            };
    }});

    });

    }, [];

return (
    <>
        <UserView user={storedUser} />
        <UpdateView storedToken={storedToken} storedUser={storedUser} />
        <DeleteUser storedToken={storedToken} storedUser={storedUser} />
        
    </>
);


/*

    useEffect (() => {
        fetch('https://jackoc-myflix.onrender.com/users/${user.Username}',
        {
            headers : {
            'Content-Type': 'application/json',
                },
        }
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUsernames(data); {
            return {
                id: usernames._id,
                username: doc.Username,
                email: doc.Email,
                faveMovies: doc.FaveMovies
            };
        });

    });
    }, []);

/*
useEffect (() => {
        fetch(`https://jackoc-myflix.onrender.com/users/${user.Username}`{
            method: 'GET',
            body: JSON.stringify(data),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            return {
                id: doc._id,
                username: doc.Username,
                email: doc.Email,
                faveMovies: doc.FaveMovies
            };
        });

        setUsernames(usersFromAPI);
    });
    }, []);




    if (selectedUser) {
        return (
        <UserView userData={selectedUser} onBackClick={() => setSelectedUser(null)} />
        );
    }

    if (usernames.length === 0) {
        return <div>No user found</div>;
    }

    return (
        <>
            <UserView user={storedUser} />
            <UpdateView storedToken={storedToken} storedUser={storedUser} />
            <DeleteUser storedToken={storedToken} storedUser={storedUser} />
            
        </>
    );
                };

*/


































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