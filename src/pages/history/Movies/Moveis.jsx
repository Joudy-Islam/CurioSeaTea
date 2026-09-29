
import { useState } from "react";
import "./Movies.css";

export default function Movies() {
  const [page, setPage] = useState(1);
  const [mood, setMood] = useState("");

  const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😢", name: "Sad" },
    { emoji: "🥱", name: "Bored" },
    { emoji: "🥰", name: "Romantic" },
    { emoji: "🤩", name: "Excited" },
    { emoji: "😌", name: "Relaxed" },
  ];

  function chooseMood(selectedMood) {
    setMood(selectedMood);
    setPage(2);
  }

  return (
    <div className="movies-page">
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
          <p>You're feeling {mood}!</p>
          <p>What kind of movie would you like?</p>

          {/* هنضيف هنا أزرار أنواع الأفلام */}

          <button onClick={() => setPage(1)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}