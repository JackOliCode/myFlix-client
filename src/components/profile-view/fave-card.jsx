import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FaveCard = ({ movie, user, token, updateUser}) => {
    const { movieId } = useParams();
    const [isFavorite, setIsFavorite] = useState((movie.id)); //my thinking here is that movie is already storing the information from let favoriteMovies & favoriteMovies.map

console.log(isFavorite)

    const removeFavorite = () => {
        fetch(`https://jackoc-myflix.onrender.com/users/${user.Username}/movies/${movieId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Failed");
                return false;
            }
        })
        .then(user => {
            if (user) {
                alert("Movie deleted from favorites");
                setIsFavorite(false);
                updateUser(user);
            }
        })
        .catch(e => {
            alert(e);
        });
    }

    return (
      <Card variant="link" className="h-100">
       <button className="remove_from_faves_x" onClick={removeFavorite}>X</button>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Link>
        <Card.Body className="card_body">
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Genre.Name}</Card.Text>
        </Card.Body>
               
      </Card>
    );
  };
  
 