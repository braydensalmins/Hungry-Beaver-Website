import React from 'react';

export const StumpDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg p-4 mx-auto">
      <svg viewBox="0 0 500 450" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Definitions for gradients/textures */}
        <defs>
          <linearGradient id="stumpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="50%" stopColor="#A1887F" />
            <stop offset="100%" stopColor="#8D6E63" />
          </linearGradient>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D7CCC8" />
            <stop offset="100%" stopColor="#BCAAA4" />
          </linearGradient>
          {/* Red Arrow Head */}
          <marker id="arrowRedStart" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
            <path d="M9,0 L9,6 L0,3 z" fill="#EF4444" />
          </marker>
          <marker id="arrowRedEnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#EF4444" />
          </marker>
          {/* Green Arrow Head */}
          <marker id="arrowGreenStart" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
            <path d="M9,0 L9,6 L0,3 z" fill="#4ADE80" />
          </marker>
          <marker id="arrowGreenEnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#4ADE80" />
          </marker>
          {/* Glow filter for separation from dark bg */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Ground Line */}
        <path d="M10 400 Q250 410 490 400" stroke="#A7F3D0" strokeWidth="2" fill="none" opacity="0.3" />

        {/* --- STUMP SHAPE --- */}
        <path d="
          M 170 180 
          L 330 180
          Q 360 280 480 380
          L 460 400
          Q 380 360 330 380
          L 310 400
          Q 250 380 190 400
          L 170 380
          Q 120 360 40 400
          L 20 380
          Q 140 280 170 180
          Z
        " fill="url(#stumpGradient)" stroke="#3E2723" strokeWidth="2" />
        
        {/* Texture details */}
        <path d="M190 200 Q180 300 100 370" stroke="#3E2723" strokeWidth="2" opacity="0.2" fill="none" />
        <path d="M230 200 Q230 320 250 370" stroke="#3E2723" strokeWidth="2" opacity="0.2" fill="none" />
        <path d="M300 200 Q320 320 400 370" stroke="#3E2723" strokeWidth="2" opacity="0.2" fill="none" />

        {/* Top Cut Face */}
        <ellipse cx="250" cy="180" rx="80" ry="20" fill="url(#topGradient)" stroke="#5D4037" strokeWidth="2" />
        
        {/* Rings */}
        <ellipse cx="250" cy="180" rx="60" ry="15" fill="none" stroke="#5D4037" strokeWidth="1" opacity="0.4" />
        <ellipse cx="250" cy="180" rx="35" ry="9" fill="none" stroke="#5D4037" strokeWidth="1" opacity="0.4" />
        <ellipse cx="250" cy="180" rx="15" ry="4" fill="none" stroke="#5D4037" strokeWidth="1" opacity="0.4" />


        {/* --- ARROWS & MEASUREMENTS --- */}

        {/* 1. GREEN (MEASURE THIS) */}
        <line x1="20" y1="380" x2="20" y2="40" stroke="#4ADE80" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
        <line x1="480" y1="380" x2="480" y2="40" stroke="#4ADE80" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
        
        <line x1="25" y1="50" x2="475" y2="50" stroke="#4ADE80" strokeWidth="4" markerEnd="url(#arrowGreenEnd)" markerStart="url(#arrowGreenStart)" />
        
        <rect x="175" y="20" width="150" height="24" rx="4" fill="#064e3b" opacity="0.8" />
        <text x="250" y="37" textAnchor="middle" fill="#4ADE80" fontWeight="bold" fontSize="16" fontFamily="sans-serif" letterSpacing="1px">MEASURE THIS</text>


        {/* 2. RED (NOT THIS) */}
        <line x1="170" y1="180" x2="170" y2="100" stroke="#EF4444" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
        <line x1="330" y1="180" x2="330" y2="100" stroke="#EF4444" strokeWidth="1" strokeDasharray="4" opacity="0.6" />

        <line x1="175" y1="110" x2="325" y2="110" stroke="#EF4444" strokeWidth="4" markerEnd="url(#arrowRedEnd)" markerStart="url(#arrowRedStart)" />
        
        <rect x="200" y="80" width="100" height="20" rx="4" fill="#7f1d1d" opacity="0.8" />
        <text x="250" y="95" textAnchor="middle" fill="#EF4444" fontWeight="bold" fontSize="12" fontFamily="sans-serif" letterSpacing="1px">NOT THIS</text>

      </svg>
    </div>
  );
};
