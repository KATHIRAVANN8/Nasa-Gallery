import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [dateSearch, setDateSearch] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NASA_API_KEY;
        if (!API_KEY) throw new Error("NASA API key is missing!");

        const res = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`
        );

        setImages(res.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch images. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = images.filter(
    (img) =>
      img.title.toLowerCase().includes(search.toLowerCase()) &&
      (mediaType ? img.media_type === mediaType : true) &&
      (dateSearch ? img.date === dateSearch : true) // Date filtering
  );

  return (
    <div className="container">
      <h1>NASA Astronomy Gallery</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <input
          type="date"
          value={dateSearch}
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            const formattedDate = selectedDate.toISOString().split("T")[0]; // Ensures YYYY-MM-DD format
            setDateSearch(formattedDate);
          }}
          className="date-input"
        />

        <select
          onChange={(e) => setMediaType(e.target.value)}
          className="filter-select"
        >
          <option value="">All</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
        </select>
      </div>

      {loading && <p className="loading-text">Loading images...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <div className="grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <ImageCard key={img.date} image={img} />
            ))
          ) : (
            <p className="no-results">No matching results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
