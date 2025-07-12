import React, { useState } from 'react'
import { data, useNavigate } from 'react-router'
import Timeformat from './Timeformat';
import { Heart, Star, StarIcon } from 'lucide-react';

const Moviesitem = (Props) => {
    const navigate = useNavigate();

    const [style, setStyle] = useState(false)

    const handleclick = () => {
        setStyle(!style)
    }

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    const year = new Date(Props.movie.release_date).getFullYear();



    return (
        <div className='hover:-translate-y-2 duration-300 ease-out  p-4 w-[20em]  max-sm:w-[18em]  bg-[#1e2838] rounded-xl flex flex-col gap-2 '>

            <img onClick={() => {
                scrollTo();
                navigate(`/Movies/${Props.movie._id}`)
            }}
                className=' cursor-pointer h-[15em] w-[22em] rounded-2xl object-cover hover:opacity-60' src={Props.movie.backdrop_path} />



            <h3 className='text-2xl font-semibold flex flex-wrap'>{Props.movie.title}</h3>

            <p className='text-gray-300 '>{year} | {Props.movie.genres.slice(0, 2).map(genres => genres.name).join("-")} | {Timeformat(Props.movie.runtime)}</p>

            <div className='flex items-center justify-between'>
                <button onClick={() => {
                    scrollTo();
                    navigate(`/Movies/${Props.movie._id}`)
                }}
                    className='bg-[#f74566] px-6 py-1 rounded-4xl cursor-pointer'>Buy Ticket</button>

                <p className='flex items-center gap-1'>
                    <StarIcon className='text-[#f74566] fill-[#f74566]' />
                    {Props.movie.vote_average.toFixed(1)}
                    <Heart onClick={handleclick} style={{ fill: style ? "#f74566" : "" }} className='ml-2 cursor-pointer stroke-1' />
                </p>

            </div>

        </div>

    )
}

export default Moviesitem
