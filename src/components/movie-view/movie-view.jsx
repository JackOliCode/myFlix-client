import PropTypes from "prop-types";
import { Card, Col, Row, Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieView = ({ movies, user, token, updateUser }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  const [isFavorite, setIsFavorite] = useState(user.FaveMovies.includes(movie.id));

  useEffect(() => {
      setIsFavorite(user.FaveMovies.includes(movie.id));
  }, [movieId])

  const addFavorite = () => {
      fetch(`https://jackoc-myflix.onrender.com/users/${user.Username}/movies/${movieId}`, {
          method: "POST",
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
              alert("Movie added to favorites");
              setIsFavorite(true);
              updateUser(user);
          }
      })
      .catch(e => {
          alert(e);
      });
  }

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
    <Card>
      <Link to={`/`}>
        <Card.Img src={movie.ImagePath} />
      </Link>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <span className="bold_title">Director: </span>
            <span>{movie.Director.Name}</span>
          </Card.Text>
          <Card.Text>
            <span className="bold_title">Genre: </span>
            <span>{movie.Genre.Name}</span>
          </Card.Text>
          <Card.Text>
            <div className="bold_title">Description: </div>
            <div>{movie.Description}</div>
          </Card.Text>
        </Card.Body>
        <Link to={`/`}>
        <Button className="w-100">Back</Button>
        </Link>
        {isFavorite ? 
           <Button variant="danger" className="ms-2" onClick={removeFavorite}>Remove from favorites</Button>
             : <Button variant="primary" className="ms-2" onClick={addFavorite}>Add to favorites</Button>
        }      
    </Card>
  );
};

//below is code for non-card version
/*
    return (
      <Row className="justify-content-md-center">
        <Col md={6} className="mb-1">
        <img src={movie.ImagePath} style={{ width: "100%" }} />
      </Col>
      <div className="mb-1">
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div className="mb-1">
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div className="mb-1">
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div className="mb-1">
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <Link to={`/`}>
        <button onClick={onBackClick}>Back</button>
      </Link>
      </Row>
    );
  }; 
 */

  //PropTypes for the MovieView

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string
    }).isRequired,
  }).isRequired,
};