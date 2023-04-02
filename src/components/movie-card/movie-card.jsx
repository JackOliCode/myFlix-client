import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
      <Card variant="link" className="customCard h-100 movie-card-ani">
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
  
  //PropsTypes for the MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
};