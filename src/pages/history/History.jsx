import React, { useState } from 'react';
import data from './data.json';

export default function History() {
  // This state keeps track of the year the user clicked
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    // Main background is Deep Chocolate
    <div className="min-h-screen bg-[#3A170D] text-[#FFF1D0] p-8 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#E2A45F]">
        The Internet Museum
      </h1>
      
      {/* Timeline Buttons Container */}
      <div className="flex overflow-x-auto gap-4 pb-4 mb-8 border-b border-[#5A2815]">
        {data.map((item) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item)}
            // If this button is the one clicked, it turns Caramel. Otherwise, Rich Brown.
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors font-semibold ${
              selectedYear?.year === item.year
                ? 'bg-[#C47A3C] text-[#3A170D]'
                : 'bg-[#7A3B1C] text-[#F4D39B] hover:bg-[#9A5228]'
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

      {/* Exhibit Display Area */}
      {!selectedYear ? (
        // If no year is selected, show this message
        <div className="text-center text-[#C47A3C] mt-20">
          <p className="text-xl">Select a year to explore.</p>
        </div>
      ) : (
        // If a year IS selected, show the museum card
        <div className="max-w-2xl mx-auto bg-[#5A2815] p-8 rounded-lg shadow-lg border border-[#9A5228]">
          <h2 className="text-6xl font-bold text-[#E2A45F] mb-6">
            {selectedYear.year}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#3A170D] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#C47A3C] mb-2">🎬 Blockbuster Movie</h3>
              <p className="text-[#F4D39B]">{selectedYear.movie}</p>
            </div>
            
            <div className="bg-[#3A170D] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#C47A3C] mb-2">🎵 #1 Hit Song</h3>
              <p className="text-[#F4D39B]">{selectedYear.song} by {selectedYear.artist}</p>
            </div>
          </div>

          <div className="bg-[#3A170D] p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#C47A3C] mb-2">📜 Did You Know?</h3>
            <p className="text-[#FFF1D0] italic">{selectedYear.fact}</p>
          </div>
        </div>
      )}
    </div>
  );
}