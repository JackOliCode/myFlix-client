import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { Col, Row, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";


export const MainView = () => {
 
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  const [movies, setMovies] = useState([]);
 

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
  <BrowserRouter>
  <NavigationBar 
  user={user}
  onLoggedOut={() => {
    setUser(null);
    setToken(null);
    localStorage.clear(); 
  }} />
  <div>
    <Row className="justify-content-md-center">
      <Routes>
        <Route
        path="/signup"
        element={
          <>{user ? (
            <Navigate to="/" />
          ) : (
            <Col md={5}>
              <div className="mb-2 greenFont" style={{ textDecoration: "underline"}} >Register</div>
              <SignupView />
            </Col>
          )}
            </>
        }
        />

        <Route 
        path="/login"
        element={
          <>
            {user ? (
              <Navigate to="/" />
            ) : (
              <Col md={5}>
                <div className="mb-2 greenFont" style={{ textDecoration: "underline"}} >Log-in</div>
                <LoginView onLoggedIn={(user, token) => {
                  setUser(user)
                  setToken(token)
                  }} 
                />
              </Col>
            )}              
          </>
        }
        />

      <Route
        path="/movies/:movieId"
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <div className="greenFont">The list is empty!</div>
            ) : (
              <Col md={5}>
                <MovieView
                  movies={movies} />
              </Col>
            )} 
          </>
        }
      />

      <Route
        path="/"
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <div className="greenFont">The list is empty!</div>
            ) : (
              <>
              {movies.map((movie) => (
                <Col
                  key={movie.id}
                  md={3}
                  className="mb-5"
                >
                  <MovieCard movie={movie} />
                </Col>
              ))}
              </>
            )}
            </>
        }
        />
        <Route
            path="/users/:Username"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView 
                    user={user}
                    movies={movies}
                    token={token} />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
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
    </BrowserRouter>
  );
};