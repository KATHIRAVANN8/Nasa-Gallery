import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const removeFavorite = (date) => {
    const updatedFavorites = favorites.filter((img) => img.date !== date);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const goToDetails = (date) => {
    navigate(`/details/${date}`); // Navigate to details page with date as param
  };

  return (
    <div className="favorites-container">
      <h2>❤️ Favorite Images</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">
          No favorites yet. Add some from the gallery! 🛰️
        </p>
      ) : (
        <div className="grid">
          {favorites.map((img, index) => (
            <div key={index} className="image-card">
              <div
                className="image-wrapper"
                onClick={() => goToDetails(img.date)}
                style={{ cursor: "pointer" }}
              >
                {img.media_type === "image" ? (
                  <img src={img.url} alt={img.title} className="fav-image" />
                ) : (
                  <iframe
                    src={img.url}
                    title={img.title}
                    className="fav-video"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="image-info">
                <h3>{img.title}</h3>
                <p className="date">📅 {img.date}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(img.date)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
