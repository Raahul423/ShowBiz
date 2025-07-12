import { ArrowRight, MenuIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import Blurcircle from './Blurcircle';
import Moviesitem from './Moviesitem';
import { dummyShowsData } from '../assets/assets';


const MoviesCart = () => {


    const navigate = useNavigate();

    const Click = () => {
        navigate('./Movies')
    }

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }




    return (

        <div className='px-[10em]  max-sm:px-[2px]  '>
            <div className='h-full flex flex-col '>
                <div className='flex justify-between py-20 items-center '>
                    <Blurcircle top='46em' right='3em' />
                    <span className='text-xl' >Now Showing</span>
                    <span onClick={Click} className='flex text-sm cursor-pointer'>Veiw All
                        <ArrowRight className='hover:translate-x-0.5' /></span>
                </div>


                <div className='flex flex-wrap justify-around gap-8 max-sm:justify-center max-lg:justify-center'>
                    {dummyShowsData.slice(0, 4).map((event) => (
                        <Moviesitem key={event._id} movie={event} />
                    ))}
                </div>

                <div className='mx-auto mt-24 '>
                    <button onClick={()=>{Click(),scroll()}} className='bg-[#f74566] px-8 py-3 rounded-4xl flex cursor-pointer '>Show More <ArrowRight /></button>
                </div>

            </div>

        </div>
    )
}

export default MoviesCart
