import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
            <span>Description: </span>
            <span>{movie.description}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director}</span>
        </div>
        <div>
            <span>Genre: </span>
            <span>{movie.genre}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
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