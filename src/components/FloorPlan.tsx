"use client";

import { motion } from "motion/react";

/**
 * Editorial top-down floor plan of Spazio BAKR — 4 rooms, schematic.
 * Stroke uses currentColor so it adapts to any palette (main or variant).
 */
export function FloorPlan() {
  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    inView: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.6, ease: [0.7, 0, 0.2, 1] },
    },
  };

  const fade = {
    initial: { opacity: 0 },
    inView: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.9 },
    },
  };

  // viewBox 800 × 540
  // Rooms (proportional, not literal):
  //   Sala principale 0,0 → 560,360
  //   Camera grezza   560,0 → 800,360
  //   Backstage       0,360 → 380,540
  //   Cucina · Lounge 380,360 → 800,540

  return (
    <svg
      viewBox="0 0 800 540"
      className="h-auto w-full text-current"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      vectorEffect="non-scaling-stroke"
      aria-label="Pianta dello spazio — 4 ambienti"
    >
      {/* Outer wall */}
      <motion.rect
        x="0.7"
        y="0.7"
        width="798.6"
        height="538.6"
        variants={draw}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
      />

      {/* Internal walls */}
      <motion.line
        x1="560"
        y1="0"
        x2="560"
        y2="360"
        variants={draw}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      <motion.line
        x1="0"
        y1="360"
        x2="800"
        y2="360"
        variants={draw}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <motion.line
        x1="380"
        y1="360"
        x2="380"
        y2="540"
        variants={draw}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.0, delay: 0.8 }}
      />

      {/* Door openings — drawn as background-colored rects on top of walls */}
      {/* Door: sala ↔ camera grezza */}
      <rect x="552" y="170" width="16" height="36" stroke="none" fill="currentColor" opacity="0" />
      {/* Door: sala ↔ backstage */}
      <rect x="170" y="352" width="36" height="16" stroke="none" fill="currentColor" opacity="0" />
      {/* Door: backstage ↔ cucina */}
      <rect x="372" y="430" width="16" height="36" stroke="none" fill="currentColor" opacity="0" />

      {/* Skylights in main hall — dashed pattern */}
      <motion.g
        variants={fade}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        opacity="0.35"
      >
        {[60, 140, 220, 300, 380, 460].map((x) => (
          <line
            key={x}
            x1={x}
            y1="60"
            x2={x + 40}
            y2="60"
            strokeDasharray="2 4"
          />
        ))}
      </motion.g>

      {/* Window strip on main hall right wall */}
      <motion.line
        variants={draw}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, delay: 1.0 }}
        x1="558"
        y1="40"
        x2="558"
        y2="320"
        strokeWidth="3"
      />

      {/* Labels */}
      <motion.g
        variants={fade}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "-15% 0px" }}
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {/* Sala principale */}
        <text x="280" y="180" textAnchor="middle" fontSize="14" fill="currentColor">
          Sala principale
        </text>
        <text x="280" y="206" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.55">
          180 m²
        </text>

        {/* Camera grezza */}
        <text x="680" y="170" textAnchor="middle" fontSize="11" fill="currentColor">
          Camera grezza
        </text>
        <text x="680" y="194" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.55">
          25 m²
        </text>

        {/* Backstage */}
        <text x="190" y="450" textAnchor="middle" fontSize="11" fill="currentColor">
          Backstage
        </text>
        <text x="190" y="474" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.55">
          20 m²
        </text>

        {/* Cucina · Lounge */}
        <text x="590" y="450" textAnchor="middle" fontSize="11" fill="currentColor">
          Cucina · Lounge
        </text>
        <text x="590" y="474" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.55">
          15 m²
        </text>

        {/* Compass */}
        <g transform="translate(744, 510)">
          <line x1="0" y1="6" x2="0" y2="-12" />
          <polygon points="0,-16 -3,-9 3,-9" fill="currentColor" stroke="none" />
          <text x="10" y="-2" fontSize="10" fill="currentColor" opacity="0.6">
            N
          </text>
        </g>

        {/* Scale */}
        <g transform="translate(20, 510)" opacity="0.55">
          <line x1="0" y1="0" x2="60" y2="0" />
          <line x1="0" y1="-3" x2="0" y2="3" />
          <line x1="60" y1="-3" x2="60" y2="3" />
          <text x="30" y="14" textAnchor="middle" fontSize="9" fill="currentColor">
            5 m
          </text>
        </g>

        {/* Entrance arrow */}
        <g transform="translate(190, 540)" opacity="0.6">
          <line x1="0" y1="-22" x2="0" y2="-4" />
          <polygon points="0,0 -4,-7 4,-7" fill="currentColor" stroke="none" />
          <text x="14" y="-8" fontSize="9" fill="currentColor">
            INGRESSO
          </text>
        </g>
      </motion.g>
    </svg>
  );
}
