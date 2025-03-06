import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Details.css";


const Details = () => {
  const { date } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NASA_API_KEY;
        if (!API_KEY) {
          console.error("NASA API key is missing!");
          return;
        }

        const res = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
        );

        setImage(res.data);

        // Check if the image is already in favorites
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some((fav) => fav.date === date));
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [date]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.date !== date);
    } else {
      favorites.push(image);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return image ? (
    <div className="details-container">
      <div className="image-container">
        {image.media_type === "image" ? (
          <img src={image.url} alt={image.title} className="apod-image" />
        ) : (
          <iframe
            src={image.url}
            title={image.title}
            className="apod-video"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="info">
        <h2>{image.title}</h2>
        <p className="date">📅 {image.date}</p>
        {image.copyright && <p className="copyright">© {image.copyright}</p>}
        <p className="description">{image.explanation}</p>
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
        >
          {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
        </button>
      </div>
    </div>
  ) : (
    <p className="error-message">No image found for the selected date.</p>
  );
};

export default Details;
