import React, { useState, useEffect } from "react";

const Home = () => {
  const [breeds, setBreeds] = useState({});

  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/list/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { message } = data;
        setBreeds(message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const breedsNames = Object.keys(breeds);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>
        {breedsNames.map((breed, index) => (
          <tr>
            <td>{(index += 1)}</td>
            <td>{breed}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
