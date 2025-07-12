import { useState } from 'react'
import ReactPlayer from 'react-player'
import Blurcircle from './Blurcircle';
import { dummyTrailers } from '../assets/assets'
import { CirclePlay } from 'lucide-react';

const Trailers = () => {

  const [Trailers, SetTrailers] = useState(dummyTrailers[0])



  return (
    <div className='pb-[10.5em] w-full  px-[10.5em] flex flex-col gap-8 max-sm:px-[2em] max-sm:w-full'>
      <p className='pt-24 pb-8 text-xl'>Trailers</p>

      <div className='w-full'>
        <Blurcircle top='125em' right='0'
        />
        <ReactPlayer src={Trailers.videoUrl}  controls={true} style={{ width: 'fit-contant', height: '540px' }} />
      </div>


      <div className='flex w-full max-sm:justify-center  justify-around max-sm:gap-3  gap-8 sm:px-8 '>
          {dummyTrailers.map((image)=>{
            return(
              <div onClick={()=>(SetTrailers(image))} className='relative hover:-translate-y-2 duration-300'>
                <img className=' max-sm:object-cover rounded-2xl max-sm:h-[10em] max-sm:w-[10em] cursor-pointer hover:opacity-50' src={image.image} />
                <CirclePlay className=' max-sm:hidden max-sm:w-[1em] max-sm:h-[1em] cursor-pointer absolute top-10 left-24 w-[3em] h-[3em]'/>
              </div>
            )
          })}
      </div>
    </div>

  )
}

export default Trailers
