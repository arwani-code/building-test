/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import CardGallery from "react-card-image-gallery";
import LazyLoad from "react-lazyload";

const ByBreed = () => {
  const [imgUrls, setImageUrl] = useState([]);

  useEffect(() => {
    const url = "https://dog.ceo/api/breed/hound/images";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { message } = data;
        setImageUrl(message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        margin: "0 11rem",
        gridTemplateColumns: "repeat(4, 15rem)",
      }}
    >
      {imgUrls.map((imgUrl, index) => (
        <LazyLoad height={200}>
          <CardGallery imagesPerPage={4}>
            <div key={index}>
              <img src={`${imgUrl}`} />
            </div>
          </CardGallery>
        </LazyLoad>
      ))}
    </div>
  );
};

export default ByBreed;
