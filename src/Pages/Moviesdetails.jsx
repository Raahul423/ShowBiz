import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { CirclePlay, Heart, StarIcon } from 'lucide-react';
import Timeformat from '../Components/Timeformat';
import Datetime from '../Components/Datetime';
import Relatedmovies from '../Components/Relatedmovies';
import Loading from '../Components/Loading';
import LazyLoad from 'react-lazy-load';

const Moviesdetails = () => {

  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const getShow = () => {
    const selectedShow = dummyShowsData.find(show => show._id === id);
    if (selectedShow) {
      setShow({
        movie: selectedShow,
        dateTime: dummyDateTimeData
      })
    }

  };

  useEffect(() => {
    getShow()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id]);




  return (
    <div className='px-[10em] pt-[8em] max-sm:px-[2em] max-sm:pt-[2em] flex flex-col gap-[6em]'>
      <div className=' flex max-sm:flex-col mt-20'>
        <LazyLoad>
          <img src={show.movie.poster_path} alt="error" className='h-104 max-w-70 rounded-2xl object-cover max-sm:m-auto' />
        </LazyLoad>

        <div className='px-8 flex flex-col gap-4 max-sm:px-2'>
          <p className='text-xl text-[#f74566]'>ENGLISH</p>

          <p className='text-4xl'>{show.movie.title}</p>

          <p className='flex gap-4 text-gray-500'><StarIcon className='text-[#f74566] fill-[#f74566] ' />
            {show.movie.vote_average.toFixed(1)} User Rating</p>

          <p className='text-gray-500'>
            {show.movie.overview}
          </p>

          <p>{Timeformat(show.movie.runtime)} | {show.movie.genres.map((e) => (e.name)).join("-")} | {new Date(show.movie.release_date).getFullYear()}</p>


          <div className='flex gap-4 items-center max-sm:flex-col'>

            <button className='bg-[#1e2838] px-8 py-3 items-center rounded-[.5em] flex cursor-pointer'><CirclePlay className='mr-2' /> Watch Trailer </button>

            <a href='#Cast' onClick={() => { navigate(`/Movies/${show.movie._id}`) }} className='bg-[#f74566] px-12 py-3 rounded-[.5em] cursor-pointer'>Buy Ticket</a>

          </div>
        </div>
      </div>



      <div id='Cast' className=" overflow-hidden flex flex-col gap-4">
        <p className="text-white text-xl mb-4 px-4 pt-4">Your Favourite Cast</p>

        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll-x  w-max ">
            {show.movie.casts.slice(0, 10).map((data, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <img
                  src={data.profile_path}
                  alt="Cast"
                  className="rounded-full h-[6em] w-[6em] object-cover mx-auto"
                />
                <p className="text-sm mt-2 text-white w-[8em] mx-auto">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Datetime dateselect={show.dateTime} id={id} />

      <div>
        <Relatedmovies />
      </div>

    </div>
  )
};


export default Moviesdetails
