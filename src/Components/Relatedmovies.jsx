import React from 'react'
import { useNavigate } from 'react-router';
import Blurcircle from './Blurcircle';
import Moviesitem from './Moviesitem';
import { dummyShowsData } from '../assets/assets';
import { ArrowRight } from 'lucide-react';

const Relatedmovies = () => {

    const scroll=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    const navigate = useNavigate();

    return (
        <div className='max-sm:px-0'>
            <div className='h-full flex flex-col '>
                <div className='flex py-12 items-center '>
                    <span className='text-xl' >You May Also Like</span>
                </div>


                <div className='flex flex-wrap  gap-8 max-sm:justify-center max-lg:justify-center'>
                    {dummyShowsData.slice(0, 4).map((event) => (
                        <Moviesitem key={event._id} movie={event} />
                    ))}
                </div>

                <div className='mx-auto mt-24 '>
                    <button onClick={() => {scroll(),navigate('/Movies') }} className='bg-[#f74566] px-8 py-3 rounded-4xl flex cursor-pointer '>Show More <ArrowRight /></button>
                </div>

            </div>

        </div>
    )
}

export default Relatedmovies
