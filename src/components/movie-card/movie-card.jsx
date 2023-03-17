import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card onClick={() => {
          onMovieClick(movie);
        }}
        variant="link" className="h-100"
      >
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body style={{ background: "Chartreuse"}}>
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
  onMovieClick: PropTypes.func.isRequired
};