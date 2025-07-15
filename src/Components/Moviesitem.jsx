// src/components/Moviesitem.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Timeformat from './Timeformat';
import { Heart, StarIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const Moviesitem = ({ movie }) => {
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
        setIsFav(favs.some(item => item._id === movie._id));
    }, [movie._id]);

    const handleClick = () => {
        const favs = JSON.parse(localStorage.getItem('favouriteMovies')) || [];

        if (isFav) {
            const updated = favs.filter(item => item._id !== movie._id);
            localStorage.setItem('favouriteMovies', JSON.stringify(updated));
            toast('Removed from favorites');
            setIsFav(false);
        } else {
            favs.push(movie);
            localStorage.setItem('favouriteMovies', JSON.stringify(favs));
            toast.success('Added to favorites');
            setIsFav(true);
        }
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const year = new Date(movie.release_date).getFullYear();

    return (
        <div className="w-[20em] bg-[#1d2a3b] rounded-xl p-4 flex flex-col gap-2 hover:-translate-y-2 duration-300">
            <img
                onClick={() => { scrollToTop(); navigate(`/Movies/${movie._id}`); }}
                src={movie.backdrop_path}
                alt={movie.title}
                className="h-[17em] object-cover rounded-xl hover:opacity-55 cursor-pointer "
            />
            <h3 className='text-2xl'>{movie.title}</h3>
            <p className='text-gray-300'>
                {year} | {movie.genres.slice(0, 2).map(g => g.name).join('-')} | {Timeformat(movie.runtime)}
            </p>
            <div className="flex items-center justify-between">
                <button onClick={() => { scrollToTop(); navigate(`/Movies/${movie._id}`); }} className="bg-[#f74566] px-7 py-1 rounded-full">Buy Ticket</button>
                <p className="flex items-center gap-1">
                    <StarIcon className="text-[#f74566] fill-[#f74566]" />
                    {movie.vote_average.toFixed(1)}
                    <Heart
                        onClick={handleClick}
                        className={`cursor-pointer ml-2 stroke-1 ${isFav ? 'text-red-700 fill-red-700' : ''}`}
                    />
                </p>
            </div>
        </div>
    );
};

export default Moviesitem;
