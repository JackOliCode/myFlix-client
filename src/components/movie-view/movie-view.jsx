import PropTypes from "prop-types";
import { Card, Col, Row, Button} from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Img src={movie.ImagePath} onClick={onBackClick} />
          </Card>
        </Col>
      </Row>

      <Row>
        <Card>
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
        <Button onClick={onBackClick}>Back</Button>
        </Card>
      </Row>
    </div>
  );
};

//below is code for non-card version

/* export const MovieView = ({ movie, onBackClick }) => {
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
  }; */
  

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