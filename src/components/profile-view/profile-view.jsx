import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Form, Row, Col, Container, Card} from "react-bootstrap";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { UserView } from "./user-view";
import { UpdateView } from "./update-user";
import { UpdateView } from "./update-user";
import { DeleteUser } from "./delete-user";
import { FaveCard } from "./fave-card";

export const ProfileView = ({token, movies, onLoggedOut, updateUser, user}) => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [myuser, setMyUser] = useState('');

    let favoriteMovies = movies.filter(movie => user.FaveMovies.includes(movie.id));

    useEffect(()=>{
        fetch(
            `https://jackoc-myflix.onrender.com/users/${storedUser.Username}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
        )
        .then((response) => response.json())
        .then((data)=> setMyUser(data))
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Body>
                            <UserView user={myuser} />
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col xs={12} sm={8}>
                    <UpdateView storedToken={storedToken} storedUser={storedUser} />
                    <DeleteUser storedToken={storedToken} storedUser={storedUser} />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <h3>Fave Movies: </h3>
                        {favoriteMovies.map(movie => (
                        <div className="mb-4" key={movie._id}>
                            <FaveCard movie={movie} />
                        </div>
                    ))}
            </Col>
            </Row>

            
            
            
            
            
        </Container>
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