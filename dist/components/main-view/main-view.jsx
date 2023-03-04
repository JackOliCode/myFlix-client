import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Shrek",
      image: "https://via.placeholder.com/270x480.png?text=Shrek",
      director: "Andrew Adamson",
      genre: "Animation",
      description: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back."
    },
    {
      id: 2,
      title: "The Notebook",
      image:
        "https://via.placeholder.com/270x480.png?text=The+Notebook",
        director: "Nick Cassavetes",
        genre: "Romance",
        description: "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences."
    },
    {
      id: 3,
      title: "Once Upon a Time in Hollywood",
      image:
        "https://via.placeholder.com/270x480.png?text=Once+Upon+A+Time+In+Hollywood",
        director: "Quentin Tarantino",
        genre: "Comedy",
        description: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood\'s Golden Age in 1969 Los Angeles."
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
    </div>
  );
};
