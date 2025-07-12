import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Moviesitem from '../Components/Moviesitem'



const Movies = () => {
  return (
    <div className='p-[10em] max-sm:px-[2em] max-sm:pt-[6em]'>

      <p className='py-8 font-semibold text-xl'>Now Showing</p>
      <div className='flex flex-wrap justify-around  gap-6 max-sm:justify-center max-lg:justify-center '>
        {dummyShowsData.map((event) => (
          <Moviesitem key={event._id} movie={event} />
        ))}
      </div>


    </div>
  )
}

export default Movies

