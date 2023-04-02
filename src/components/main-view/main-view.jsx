import { useState, useEffect, useRef } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { Col, Row, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { FaveMovieView } from "../movie-view/favemovie-view";

export const MainView = () => {
 
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const searchRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const updateUser = user => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const filterMovies = (searchInput) => {
    if (searchInput.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filteredMovies = movies.filter(movie => {
        return movie.Title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredMovies(filteredMovies);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const results = movies.filter(movie => {
      return movie.Title.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredMovies(results);
  }

  const handleFilter = (genre) => {
    const results = movies.filter(movie => {
      return movie.Genre.Name === genre;
    });
    setFilteredMovies(results);
  }

  const searchMovies = () => {
    if (searchRef.current && searchRef.current.value.trim() !== "") {
      filterMovies(searchRef.current.value);
    } else {
      setFilteredMovies([]);
    }
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://jackoc-myflix.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
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
            Featured: movie.Featured,
          };
        });
        setMovies(moviesFromAPI);
      });
    setFilteredMovies(movies);
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar 
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear(); 
        }} />
        
  
  
      <Row className="justify-content-md-center mt-5">
        <Routes>
          <Route
            path="/signup"
            element={
            <>{user ? (
              <Navigate to="/" />
            ) : (
              <Col md={5}>
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
              <div >The list is empty!</div>
            ) : (
              <Col md={5}>
                <MovieView
                  movies={movies} user={user} token={token} updateUser={updateUser}/>
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
          <Row className="justify-content-md-center mt-3" style={{marginBottom:'30px'}}>
            <Col md={6}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  placeholder="Search movies"
                  value={searchTerm}
                  onChange={handleSearch}
                  ref={searchRef}
                  className="search_bar"
                />
        
                <Button variant="primary" onClick={searchMovies}>
                  Search
                </Button>
              </div>
              {searchTerm.trim() === "" ? (
                <></>
              ) : filteredMovies.length === 0 ? (
                <div>No movies found</div>
              ) : (
                <Row style={{marginTop:'30px'}}>
                  {filteredMovies.map((movie) => (
                    <Col key={movie.id} md={4} className="mb-5">
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            {movies.map((movie) => (
              <Col
                key={movie.id}
                md={4}
                className="mb-5"
              >
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  }
/>

        <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView 
                    user={user}
                    movies={movies}
                    token={token} 
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      localStorage.clear();
                  }} 
                  updateUser={updateUser} />
                  </Col>
                ) }
              </>
            }
            />
            <Route
        path="/profile/movies/:movieId"
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <div >The list is empty!</div>
            ) : (
              <Col md={5}>
                <FaveMovieView
                  movies={movies} user={user} token={token} updateUser={updateUser} />
              </Col>
            )} 
          </>
        }
      />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};