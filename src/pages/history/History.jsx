import React, { useState } from 'react';
import data from './data.json';

export default function History() {
  const [yearIndex, setYearIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const currentYear = data[yearIndex];

  // We create the array of exhibits dynamically
  const exhibits = [
    { 
      type: "🎬 Blockbuster", 
      title: currentYear.movie, 
      desc: `The most iconic film of ${currentYear.year}.` 
    },
    { 
      type: "🎵 #1 Hit Song", 
      title: currentYear.song, 
      desc: `By ${currentYear.artist}` 
    },
    { 
      type: `${currentYear.emoji} Did You Know?`, 
      title: `History from ${currentYear.year}`, 
      desc: currentYear.fact 
    }
  ];

  // 🌟 NEW LOGIC: If the year has a team, push them into the exhibits array!
  if (currentYear.team) {
    currentYear.team.forEach((person) => {
      exhibits.push({
        type: `👤 ${person.name} (Born ${currentYear.year})`,
        title: `🎧 ${person.music} | 🎮 ${person.game}`,
        desc: `🗣️ Most used phrase: ${person.phrase} | 🏆 ${person.achievement}`
      });
    });
  }

  const currentCard = exhibits[cardIndex];

  const handleYearChange = (e) => {
    setYearIndex(Number(e.target.value));
    setCardIndex(0);
  };

  const nextCard = () => {
    if (cardIndex === exhibits.length - 1) {
      setCardIndex(0);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a04] via-[#3A170D] to-[#7A3B1C] text-[#FFF1D0] p-8 flex flex-col items-center font-sans">
      
      <h1 className="text-4xl font-bold text-center mb-8 text-[#E2A45F] drop-shadow-md">
        The Internet Museum
      </h1>

      {/* Slider UI */}
      <div className="w-full max-w-md mb-10 bg-[#3A170D]/80 p-4 rounded-lg shadow-lg border border-[#9A5228]">
        <label className="block text-center text-[#C47A3C] mb-2 font-semibold">
          Drag to travel to: <span className="text-[#FFF1D0] text-xl">{currentYear.year}</span>
        </label>
        <input
          type="range"
          min="0"
          max={data.length - 1}
          value={yearIndex}
          onChange={handleYearChange}
          className="w-full h-3 bg-[#5A2815] rounded-lg appearance-none cursor-pointer accent-[#C47A3C]"
        />
      </div>

      {/* Exhibit Display Area */}
      <div className="max-w-md w-full bg-[#5A2815]/80 backdrop-blur p-8 rounded-xl shadow-2xl border border-[#9A5228] min-h-[250px] flex flex-col justify-center transition-all duration-300 ease-in-out">
        
        <span className="text-xl mb-3 text-[#C47A3C] font-bold">{currentCard.type}</span>
        <h2 className="text-2xl font-bold text-[#E2A45F] mb-4">
          {currentCard.title}
        </h2>
        <p className="text-[#FFF1D0] italic text-base">
          {currentCard.desc}
        </p>
        
        {/* Card Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {exhibits.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full ${idx === cardIndex ? 'bg-[#C47A3C]' : 'bg-[#5A2815]'}`}></div>
          ))}
        </div>
      </div>

      {/* Fish Button */}
      <button 
        onClick={nextCard}
        className="mt-8 text-5xl hover:scale-125 transition-transform duration-200 active:scale-90"
        title="Click the fish to see another exhibit!"
      >
        🐟
      </button>
      
    </div>
  );
}