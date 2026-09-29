
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

function chooseMood(selectedMood) {
setMood(selectedMood);
setPage(2);
}

function chooseGenre(selectedGenre) {
setGenre(selectedGenre);
setPage(3);
}

return ( <div className="movies-page">

```
  {/* PAGE 1 - MOOD */}
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

  {/* PAGE 2 - GENRE */}
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
        Back
      </button>
    </div>
  )}

  {/* PAGE 3 - RECOMMENDATION */}
  {page === 3 && (
    <div className="recommendation-container">
      <h1>🎬 Your Movie Recommendation</h1>

      <p>
        Based on your mood:
        <strong> {mood}</strong>
      </p>

      <p>
        And your favorite genre:
        <strong> {genre}</strong>
      </p>

      <div className="movie-card">
        <div className="movie-poster">
          🎬
        </div>

        <div className="movie-info">
          <h2>Your Movie</h2>

          <p>
            We found a movie that matches your mood
            and genre!
          </p>

          <p>
            <strong>Mood:</strong> {mood}
          </p>

          <p>
            <strong>Genre:</strong> {genre}
          </p>

          <button>
            Watch Trailer 🎥
          </button>
        </div>
      </div>

      <button onClick={() => setPage(2)}>
        Back to Genres
      </button>

      <button onClick={() => setPage(1)}>
        Start Again 🔄
      </button>
    </div>
  )}

</div>


);
}
