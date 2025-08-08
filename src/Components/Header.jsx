import { assets } from '../assets/assets'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const Header = () => {

const navigate = useNavigate()

const message = setTimeout(()=>{
    toast.success("Welcome User")
})

useEffect(()=>{
    message
})



    return (
        <div className='bg-[url("./assets/bg-image.jpg")] h-screen bg-no-repeat bg-center bg-cover bg-opacity-50 items-start justify-center flex flex-col flex-wrap gap-5 max-sm:gap-8'>


            <div className=' pl-20 max-md:pl-10 max-sm:pl-4 '>
                <img src={assets.marvelLogo} className='h-14 max-md:h-11' />
            </div>

            <div className='flex flex-col gap-4 flex-wrap pl-20 max-md:gap-2 max-md:pl-10 max-sm:px-4'>
                <h2 className='text-6xl w-[9em]  max-md:text-4xl font-bold '>Captain America: Civil War</h2>
                <div className='flex gap-4 flex-wrap max-sm:gap-2'>
                    <span className=''> Action | Adventure | Sci-Fi </span>
                    <Calendar /> 2025
                    <Clock /> 2h 8m
                </div>



                <p className='max-w-md '>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
            </div>



            <div className='pl-20 max-md:pl-10 max-sm:pl-4'>
                <button onClick={()=>{navigate('./Movies')}} className='bg-[#f74566] px-8 py-3 rounded-4xl flex cursor-pointer'>Explore Movies <ArrowRight/> </button>
            </div>

        </div>
    )
}

export default Header
