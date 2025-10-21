"use client";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  
  // Inline CSS animations
  const meteorStyles = `
    @keyframes meteor {
      0% {
        transform: rotate(215deg) translateX(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: rotate(215deg) translateX(-500px);
        opacity: 0;
      }
    }
    
    @keyframes meteor-horizontal {
      0% {
        transform: rotate(215deg) translateX(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: rotate(215deg) translateX(500px);
        opacity: 0;
      }
    }
    
    @keyframes meteor-vertical {
      0% {
        transform: rotate(125deg) translateY(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: rotate(125deg) translateY(-500px);
        opacity: 0;
      }
    }
    
    @keyframes meteor-vertical-reverse {
      0% {
        transform: rotate(305deg) translateY(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: rotate(305deg) translateY(500px);
        opacity: 0;
      }
    }
    
    .meteor-animation {
      animation: meteor 5s linear infinite;
    }
    
    .meteor-animation-horizontal {
      animation: meteor-horizontal 5s linear infinite;
    }
    
    .meteor-animation-vertical {
      animation: meteor-vertical 5s linear infinite;
    }
    
    .meteor-animation-vertical-reverse {
      animation: meteor-vertical-reverse 5s linear infinite;
    }
  `;

  return (
    <>
      <style>{meteorStyles}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {meteors.map((_, idx) => {
          // Determine meteor type and direction
          const meteorType = idx % 4; // 0: original, 1: horizontal, 2: vertical, 3: vertical-reverse
          
          // Better distribution across the container width
          const containerWidth = 400; // Adjust based on your container
          const position = (Math.random() * containerWidth) - (containerWidth / 2); // Random position across container
          const randomTop = Math.floor(Math.random() * 40) - 30; // start between -30px and 10px
          const randomLeft = Math.floor(Math.random() * 40) - 30; // start between -30px and 10px

          // Choose animation class based on meteor type
          let animationClass = "meteor-animation";
          let startPosition = {};
          let trailClass = "before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[60px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-cyan-400 before:to-transparent before:opacity-70 before:content-['']";

          switch (meteorType) {
            case 0: // Original (left to right)
              animationClass = "meteor-animation";
              startPosition = {
                top: `${randomTop}px`,
                left: `calc(50% + ${position}px)`,
              };
              break;
            case 1: // Horizontal mirror (right to left)
              animationClass = "meteor-animation-horizontal";
              startPosition = {
                top: `${randomTop}px`,
                left: `calc(50% + ${position}px)`,
              };
              break;
            case 2: // Vertical (top to bottom)
              animationClass = "meteor-animation-vertical";
              startPosition = {
                top: `calc(50% + ${randomTop}px)`,
                left: `${randomLeft}px`,
              };
              trailClass = "before:absolute before:top-0 before:left-1/2 before:h-[60px] before:w-[1px] before:-translate-x-[50%] before:transform before:bg-gradient-to-b before:from-cyan-400 before:to-transparent before:opacity-70 before:content-['']";
              break;
            case 3: // Vertical reverse (bottom to top)
              animationClass = "meteor-animation-vertical-reverse";
              startPosition = {
                top: `calc(50% + ${randomTop}px)`,
                left: `${randomLeft}px`,
              };
              trailClass = "before:absolute before:bottom-0 before:left-1/2 before:h-[60px] before:w-[1px] before:-translate-x-[50%] before:transform before:bg-gradient-to-t before:from-cyan-400 before:to-transparent before:opacity-70 before:content-['']";
              break;
          }

          return (
            <span
              key={"meteor" + idx}
              className={cn(
                `${animationClass} absolute h-[2px] w-[2px] rounded-full bg-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.6)]`,
                trailClass,
                className,
              )}
              style={{
                ...startPosition,
                animationDelay: Math.random() * 2 + "s", // Random delay between 0-2s
                animationDuration: Math.floor(Math.random() * (10 - 6) + 6) + "s", // 6-10s duration
              }}
            ></span>
          );
        })}
      </motion.div>
    </>
  );
};
