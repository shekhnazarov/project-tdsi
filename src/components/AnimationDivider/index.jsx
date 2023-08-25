import React, { useState, useEffect } from "react";
import "./style.css";

const HarakatlanuvchiChiziq = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => position + 20);
    }, 1000); // Har 1 sekundda bir yangilanadi

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        marginLeft: `${position}px`,
        width: "50px",
        height: "10px",
        backgroundColor: "blue",
      }}
    ></div>
  );
};

export default HarakatlanuvchiChiziq;
