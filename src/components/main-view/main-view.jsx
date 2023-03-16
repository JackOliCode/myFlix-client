import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Col, Row, Button } from "react-bootstrap";


export const MainView = () => {
 
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  

   // useEffect hook allows React to perform side effects in component e.g fetching data
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch('https://jackoc-myflix.onrender.com/movies', {
      headers: { Authorization: `Bearer ${token}` } 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies loaded from API", data);

        const moviesFromAPI = data.map((movie) => {
          
          return {
            id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: movie.Genre,
            Director: movie.Director,
            ImagePath: movie.ImagePath,
            Featured: movie.Featured
          }
        });
        setMovies(moviesFromAPI);
      });
  }, [token]);

  // if not user is logged in, the LoginView component will be showing

return (
  <div>
    <Row className="justify-content-md-center">
      {!user ? (
        <Col md={5}>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user)
            setToken(token)
          }} 
          />
          or
          <SignupView />
          </Col>
      ) : selectedMovie ? (
        <Col md={8} style={{ border: "1px solid black" }}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)} 
          />
        </Col>
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
        {movies.map((movie) => (
          <Col
            key={movie.id}
            md={3}
            style={{ border: "1px solid green" }}
            className="mb-5"
            >
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
              </Col>
              ))}
              </>
              )}
            
      </Row>
      <Row>
      <Col>
              <Button variant="primary"
                  onClick={() => 
                  {
                    setUser(null); 
                    setToken(null);
                    localStorage.clear(); 
                  }}>
                  Logout
              </Button>
            </Col>
      </Row>
    </div>
);
            };