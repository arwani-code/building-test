/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const ByBreed = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const url = "https://dog.ceo/api/breed/hound/list";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { message } = data;
        console.log(message);
        setBreeds(message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "20px",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {breeds.map((breed, index) => (
        <p
          key={index}
          style={{
            border: "0.5px solid blue",
            padding: "2px",
            borderRadius: "4px",
          }}
        >
          {breed}
        </p>
      ))}
    </div>
  );
};

export default ByBreed;
