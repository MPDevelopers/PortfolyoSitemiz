import React from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export function StarsDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Stars Background */}
      <StarsBackground 
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
      />
      
      {/* Shooting Stars */}
      <ShootingStars
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
        starColor="#60A5FA"
        trailColor="#3B82F6"
        starWidth={12}
        starHeight={2}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Shooting Stars Demo
          </h1>
          <p className="text-gray-300 text-lg">
            Beautiful animated stars background with shooting stars effect
          </p>
        </div>
      </div>
    </div>
  );
}
