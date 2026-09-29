import { useState } from "react";
import "./Movies.css";

export default function Movies() {
const [page, setPage] = useState(1);
const [mood, setMood] = useState("");
const [genre, setGenre] = useState("");

const moods = [
{ emoji: "😊", name: "Happy" },
{ emoji: "😢", name: "Sad" },
{ emoji: "🥱", name: "Bored" },
{ emoji: "🥰", name: "Romantic" },
{ emoji: "🤩", name: "Excited" },
{ emoji: "😌", name: "Relaxed" },
];

const genres = [
{ emoji: "😂", name: "Comedy" },
{ emoji: "❤️", name: "Romance" },
{ emoji: "👻", name: "Horror" },
{ emoji: "🎭", name: "Drama" },
{ emoji: "🚀", name: "Sci-Fi" },
{ emoji: "🗺️", name: "Adventure" },
];

const movies = [
{
title: "The Hangover",
genre: "Comedy",
moods: ["Happy", "Bored"],
rating: "7.7",
year: "2009",
emoji: "😂",
description: "A funny adventure with unforgettable moments.",
},
{
title: "Home Alone",
genre: "Comedy",
moods: ["Happy", "Bored"],
rating: "7.7",
year: "1990",
emoji: "🏠",
description: "A young boy protects his home from two burglars.",
},
{
title: "The Notebook",
genre: "Romance",
moods: ["Romantic", "Sad"],
rating: "7.8",
year: "2004",
emoji: "❤️",
description: "A beautiful story about love and memories.",
},
{
title: "La La Land",
genre: "Romance",
moods: ["Romantic", "Happy", "Sad"],
rating: "8.0",
year: "2016",
emoji: "🎹",
description: "A story about love, dreams, and ambition.",
},
{
title: "The Pursuit of Happyness",
genre: "Drama",
moods: ["Sad", "Relaxed"],
rating: "8.0",
year: "2006",
emoji: "🌟",
description: "An inspiring story about hope and determination.",
},
{
title: "Forrest Gump",
genre: "Drama",
moods: ["Happy", "Sad", "Relaxed"],
rating: "8.8",
year: "1994",
emoji: "🏃",
description: "The extraordinary life journey of a kind-hearted man.",
},
{
title: "Interstellar",
genre: "Sci-Fi",
moods: ["Excited", "Relaxed"],
rating: "8.7",
year: "2014",
emoji: "🚀",
description: "An incredible journey through space and time.",
},
{
title: "Inception",
genre: "Sci-Fi",
moods: ["Excited", "Bored"],
rating: "8.8",
year: "2010",
emoji: "🌀",
description: "A team enters dreams to complete an impossible mission.",
},
{
title: "Jurassic Park",
genre: "Adventure",
moods: ["Excited", "Happy"],
rating: "8.2",
year: "1993",
emoji: "🦖",
description: "A dangerous adventure inside a dinosaur park.",
},
{
title: "Jumanji",
genre: "Adventure",
moods: ["Excited", "Happy", "Bored"],
rating: "7.0",
year: "1995",
emoji: "🌴",
description: "A mysterious game brings an exciting adventure to life.",
},
{
title: "The Conjuring",
genre: "Horror",
moods: ["Excited", "Bored"],
rating: "7.5",
year: "2013",
emoji: "👻",
description: "A family experiences strange events in an old house.",
},
{
title: "A Quiet Place",
genre: "Horror",
moods: ["Excited", "Sad"],
rating: "7.5",
year: "2018",
emoji: "🤫",
description: "A family must stay silent to survive.",
},
];

function chooseMood(selectedMood) {
setMood(selectedMood);
setPage(2);
}

function chooseGenre(selectedGenre) {
setGenre(selectedGenre);
setPage(3);
}

const recommendedMovies = movies.filter(
(movie) =>
movie.genre === genre &&
movie.moods.includes(mood)
);

return ( <div className="movies-page">

```
  {page === 1 && (
    <div className="mood-container">
      <h1>How Are You Feeling Today? 🎬</h1>

      <p>
        Every mood deserves a movie.
        Tell us how you feel!
      </p>

      <div className="mood-buttons">
        {moods.map((item) => (
          <button
            key={item.name}
            onClick={() => chooseMood(item.name)}
          >
            <span>{item.emoji}</span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )}

  {page === 2 && (
    <div className="mood-container">
      <h1>Choose Your Genre 🎥</h1>

      <p>
        You're feeling <strong>{mood}</strong>!
      </p>

      <p>What kind of movie would you like?</p>

      <div className="mood-buttons">
        {genres.map((item) => (
          <button
            key={item.name}
            onClick={() => chooseGenre(item.name)}
          >
            <span>{item.emoji}</span>
            {item.name}
          </button>
        ))}
      </div>

      <button onClick={() => setPage(1)}>
        ← Back
      </button>
    </div>
  )}

  {page === 3 && (
    <div className="recommendation-container">

      <h1>🎬 Your Movie Recommendations</h1>

      <p>
        Mood: <strong>{mood}</strong>
      </p>

      <p>
        Genre: <strong>{genre}</strong>
      </p>

      <div className="movie-grid">

        {recommendedMovies.map((movie) => (
          <div className="movie-card" key={movie.title}>

            <div className="movie-poster">
              {movie.emoji}
            </div>

            <div className="movie-info">

              <h2>{movie.title}</h2>

              <p>{movie.description}</p>

              <p>
                ⭐ {movie.rating}
              </p>

              <p>
                📅 {movie.year}
              </p>

              <span className="movie-genre">
                {movie.genre}
              </span>

            </div>

          </div>
        ))}

      </div>

      <div className="recommendation-buttons">

        <button onClick={() => setPage(2)}>
          ← Back to Genres
        </button>

        <button onClick={() => setPage(1)}>
          🔄 Start Again
        </button>

      </div>

    </div>
  )}

</div>


);
}
