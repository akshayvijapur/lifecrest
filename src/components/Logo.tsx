import React from 'react';

export function Logo() {
  return (
    <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl transform hover:scale-105 transition-transform duration-300">
      <img
        src="/logo.png"
        alt="The Life Crest Financial Services"
        className="w-full h-full object-contain"
      />
    </div>
  );
}