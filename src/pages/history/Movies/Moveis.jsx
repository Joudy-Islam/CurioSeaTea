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
      poster:
        "https://www.themoviedb.org/t/p/original/p6bJk43CTrOp3qnBmBgOGxZOpBw.jpg",
      description:
        "A funny adventure with unforgettable moments.",
    },

    {
      title: "Home Alone",
      genre: "Comedy",
      moods: ["Happy", "Bored"],
      rating: "7.7",
      year: "1990",
      poster:
        "https://th.bing.com/th/id/R.38ee7fba082dbc7ce0c827c4e3077ca7?rik=ZT8Ep0WWzYQHpQ&pid=ImgRaw&r=0",
      description:
        "A young boy protects his home from two burglars.",
    },

    {
      title: "La La Land",
      genre: "Romance",
      moods: ["Romantic", "Happy", "Sad"],
      rating: "8.0",
      year: "2016",
      poster:
        "https://tse1.mm.bing.net/th/id/OIP.xN-PrXUaDN6xgWhAA1CqvAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A story about love, dreams, and ambition.",
    },

    {
      title: "The Pursuit of Happyness",
      genre: "Drama",
      moods: ["Sad", "Relaxed"],
      rating: "8.0",
      year: "2006",
      poster:
        "https://tse4.mm.bing.net/th/id/OIP.IYLDLP7GZNs45tV0ITsuFAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "An inspiring story about hope and determination.",
    },

    {
      title: "Forrest Gump",
      genre: "Drama",
      moods: ["Happy", "Sad", "Relaxed"],
      rating: "8.8",
      year: "1994",
      poster:
        "https://tse3.mm.bing.net/th/id/OIP.Q8uXsPAH1CTHH4WKzgq6iQHaKp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "The extraordinary life journey of a kind-hearted man.",
    },

    {
      title: "Interstellar",
      genre: "Sci-Fi",
      moods: ["Excited", "Relaxed"],
      rating: "8.7",
      year: "2014",
      poster:
        "https://tse1.mm.bing.net/th/id/OIP.IuuohBMqKkT8LCNUWL4W3QHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "An incredible journey through space and time.",
    },

    {
      title: "Inception",
      genre: "Sci-Fi",
      moods: ["Excited", "Bored"],
      rating: "8.8",
      year: "2010",
      poster:
        "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
      description:
        "A team enters dreams to complete an impossible mission.",
    },

    {
      title: "Jurassic Park",
      genre: "Adventure",
      moods: ["Excited", "Happy"],
      rating: "8.2",
      year: "1993",
      poster:
        "https://tse4.mm.bing.net/th/id/OIP.ZKsj6StRhnHi9a7FTR8Z9gHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A dangerous adventure inside a dinosaur park.",
    },

    {
      title: "Jumanji",
      genre: "Adventure",
      moods: ["Excited", "Happy", "Bored"],
      rating: "7.0",
      year: "1995",
      poster:
        "https://tse2.mm.bing.net/th/id/OIP.4mdsC_TRF7gcCyfCKYJMfgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A mysterious game brings an exciting adventure to life.",
    },

    {
      title: "The Conjuring",
      genre: "Horror",
      moods: ["Excited", "Bored"],
      rating: "7.5",
      year: "2013",
      poster:
        "https://tse2.mm.bing.net/th/id/OIP.CxM9erosBRapQHE2BukkQAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A family experiences strange events in an old house.",
    },

    {
      title: "A Quiet Place",
      genre: "Horror",
      moods: ["Excited", "Sad"],
      rating: "7.5",
      year: "2018",
      poster:
        "https://tse4.mm.bing.net/th/id/OIP.FmhNiHijLndOoxuCGsKN3wHaK9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A family must stay silent to survive.",
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

  // Get ONE movie only
  const recommendedMovie = movies.find(
    (movie) =>
      movie.genre === genre &&
      movie.moods.includes(mood)
  );

  return (
    <div className="movies-page">

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
            ← Back
          </button>
        </div>
      )}

      {/* PAGE 3 - MOVIE RECOMMENDATION */}
      {page === 3 && (
        <div className="recommendation-container">

          <h1>🎬 Your Movie Recommendation</h1>

          <p>
            Mood: <strong>{mood}</strong>
          </p>

          <p>
            Genre: <strong>{genre}</strong>
          </p>

          {recommendedMovie ? (
            <div className="movie-card">

              <div className="movie-poster">
                <img
                  src={recommendedMovie.poster}
                  alt={recommendedMovie.title}
                />
              </div>

              <div className="movie-info">

                <h2>{recommendedMovie.title}</h2>

                <p>
                  {recommendedMovie.description}
                </p>

                <p>
                  ⭐ {recommendedMovie.rating}
                </p>

                <p>
                  📅 {recommendedMovie.year}
                </p>

                <span className="movie-genre">
                  {recommendedMovie.genre}
                </span>

              </div>

            </div>
          ) : (
            <p>
              😔 No movie found for this mood and genre.
            </p>
          )}

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