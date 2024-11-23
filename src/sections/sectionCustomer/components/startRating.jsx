import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = () => {
  const [rating, setRating] = useState(2);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => setRating(value);
  const handleMouseEnter = (value) => setHoveredRating(value);
  const handleMouseLeave = () => setHoveredRating(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => {
        return (
          <span
            key={value}
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <FaStar
              size={20}
              color={value <= (hoveredRating || rating) ? "#CF6F49" : "#e4e5e9"}
            />
          </span>
        );
      })}
    </div>
  );
};
