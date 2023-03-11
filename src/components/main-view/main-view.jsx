import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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

        const moviesFromAPI = data.map((doc) => {
          
          return {
            id: doc._id,
            Title: doc.Title,
            Description: doc.Description,
            Genre: doc.Genre,
            Director: doc.Director,
            ImagePath: doc.ImagePath,
            Featured: doc.Featured
          }
        });
        setMovies(moviesFromAPI);
      });
  }, [token]);

  // if not user is logged in, the LoginView component will be showing

  if (!user) {
    return (
    <LoginView                      // stores token and user
      onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }}
    />
    );
  }

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button
        onClick={() => 
        {
          setUser(null); 
          setToken(null); 
        }}>
        Logout
      </button>
    </div>
  );
};
