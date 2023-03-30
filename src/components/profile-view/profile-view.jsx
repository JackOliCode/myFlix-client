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
        
        <Container style={{border: "1px solid green"}}>
            
            <Row style={{alignItems: "center"}} >
                <Col xs={12} sm={6} md={5}> 
                    <Card className="customCard card_body">
                        <Card.Body>
                            <UserView user={myuser} updateUser={updateUser}/>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col md={1}></Col>
                <Col xs={12} sm={8} md={6} >
                    <UpdateView storedToken={storedToken} user={myuser} updateUser={updateUser}/>
                </Col>
            </Row>
            <Row>
                    <h3 className="mb-5" style={{textAlign: "center"}}>Your Fave Movies: </h3>
                    {favoriteMovies.map(movie => (
                        <Col md={4} className="mb-5" key={movie.id}>
                            <FaveCard movie={movie} user={myuser} updateUser={updateUser} storedToken={storedToken} />
                        </Col>
                    ))}               
            </Row>
            <Row >
                <Col >
                    <DeleteUser storedToken={storedToken} storedUser={storedUser} />
                </Col>   
            </Row>
            
            
            
        </Container>
    );
    };
