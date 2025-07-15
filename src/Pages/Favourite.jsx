// src/Pages/FavouritePage.jsx
import React, { useEffect, useState } from 'react';
import Moviesitem from '../Components/Moviesitem';

const FavouritePage = () => {
  const [favMovies, setFavMovies] = useState([]);

  const loadFavs = () => {
    const favs = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    setFavMovies(favs);
  };

  useEffect(() => {
    loadFavs();
    window.addEventListener('storage', loadFavs);
    return () => window.removeEventListener('storage', loadFavs);
  }, []);

  return (
    <div className="px-[10em] py-[8em]">
      <h2 className="text-3xl font-bold mb-6">My Favourites</h2>
      {favMovies.length > 0 ? (
        <div className="flex flex-wrap gap-6">
          {favMovies.map(movie => (
            <Moviesitem key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default FavouritePage;
