import React from "react";
import dr2feetLogo from "../assets/dr2feet_logo.png";

/**
 * Dr2FeetLogo Component
 * Replicates the logo from the user's uploaded image:
 * - Footprint outer silhouette with anatomical bone structure in metallic gold
 * - Bold dark/gold lettering: "Dr. 2 Feet"
 * - Gold EKG heartbeat line underneath
 * - "REGENERATIVE PODIATRY" subtext
 */
export default function Dr2FeetLogo({
  variant = "dark",
  className = "",
  height = 48,
}) {
  const textColor = variant === "light" ? "#FAF8F5" : "#0D0F12";
  const subtextColor = variant === "light" ? "#D5D8E0" : "#2A2E35";

  return (
    <div
      className={`dr2feet-logo-wrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        height,
      }}
    >
      <img
        src={dr2feetLogo}
        alt="Dr. 2 Feet"
        style={{ height: "100%", width: "auto", overflow: "visible" }}
      />
      {/* <svg 
        height={height} 
        viewBox="0 0 520 135" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '100%', width: 'auto', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="goldGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" />
            <stop offset="40%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9E7B35" />
          </linearGradient>

          <linearGradient id="goldGradientBright" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5C365" />
            <stop offset="50%" stopColor="#F5D77F" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>

          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- FOOT PRINT OUTLINE WITH ANATOMICAL BONES --- 
        <g transform="translate(10, 5)">
          {/* Toes 
          <circle cx="92" cy="14" r="5" fill={textColor} />
          <circle cx="78" cy="18" r="6.5" fill={textColor} />
          <circle cx="62" cy="24" r="8" fill={textColor} />
          <circle cx="43" cy="33" r="9.5" fill={textColor} />
          <circle cx="21" cy="46" r="11" fill={textColor} />

          {/* Outer Foot Crest Silhouette 
          <path
            d="M 24 58 C 10 70 2 92 10 114 C 18 132 44 135 62 131 C 82 127 94 105 88 85 C 84 72 70 65 60 62 C 45 58 35 60 24 58 Z"
            fill={textColor}
          />

          {/* Inner Anatomical Foot Bones in Metallic Gold 
          <g fill="url(#goldGradientLogo)">
            {/* Ankle / Talus Bone
            <path d="M 45 80 C 47 75 52 75 55 78 C 58 82 56 88 52 90 C 47 91 43 86 45 80 Z" />
            {/* Heel / Calcaneus 
            <path d="M 48 94 C 54 94 62 100 58 112 C 54 122 42 124 35 118 C 30 112 36 102 44 98 Z" />
            {/* Metatarsals 
            <path d="M 32 68 Q 42 70 48 76 Q 40 82 30 76 Z" />
            <path d="M 26 76 Q 34 78 38 85 Q 30 90 22 83 Z" />
            <path d="M 20 86 Q 28 88 30 96 Q 22 99 16 92 Z" />
            <path d="M 16 97 Q 24 100 24 108 Q 16 110 12 103 Z" />
          </g>
        </g>

        {/* --- TEXT: "Dr. 2 Feet" ---
        {/* "Dr." 
        <text
          x="120"
          y="78"
          fill={textColor}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="56"
          fontStyle="italic"
          letterSpacing="-1"
        >
          Dr.
        </text>

        {/* "2" - Metallic Gold with 3D bevel look
        <text
          x="215"
          y="82"
          fill="url(#goldGradientLogo)"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="900"
          fontSize="82"
          fontStyle="italic"
          filter="url(#goldGlow)"
        >
          2
        </text>

        {/* "Feet" 
        <text
          x="290"
          y="78"
          fill={textColor}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="56"
          fontStyle="italic"
          letterSpacing="-1"
        >
          Feet
        </text>

        {/* --- GOLD HEARTBEAT LINE & DIVIDER --- 
        {/* Horizontal Line left 
        <line x1="125" y1="102" x2="280" y2="102" stroke="url(#goldGradientLogo)" strokeWidth="2.5" />
        
        {/* EKG Heartbeat Pulse 
        <path
          d="M 280 102 L 288 102 L 293 88 L 298 116 L 304 74 L 310 110 L 315 98 L 320 102 L 510 102"
          fill="none"
          stroke="url(#goldGradientBright)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* --- SUBTEXT: "REGENERATIVE PODIATRY" --- 
        <text
          x="126"
          y="126"
          fill={subtextColor}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="700"
          fontSize="17"
          letterSpacing="8"
        >
          REGENERATIVE PODIATRY
        </text>
      </svg> */}
    </div>
  );
}
