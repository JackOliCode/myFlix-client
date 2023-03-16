import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <Row className="justify-content-md-center">
        <Col md={6} className="mb-1">
        <img src={movie.ImagePath} style={{ width: "100%" }} onClick={onBackClick} />
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
        <button onClick={onBackClick}>Back</button>
      </Row>
    );
  };
  

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