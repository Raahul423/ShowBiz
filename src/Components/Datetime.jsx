import React, { useState } from 'react'
import Blurcircle from './Blurcircle'
import { ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const Datetime = (props) => {


    const navigate= useNavigate();
    const [selected,setSelected]=useState(false)

    const clickhandler=()=>{
        if(!selected){
            return toast("Please Select a Date")
        }else{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
            navigate(`/Movies/${props.id}/${selected}`)

        }
    }


    return (
        <div id='max-sm:Datetime' className='border-1 border-[#f74566] p-8 flex justify-between items-center rounded-xl flex-wrap max-sm:justify-center'>
            <Blurcircle top='55em' left='3em' />
            <Blurcircle top='63em ' right='2em' />


            <div className='max-sm:mb-6'>
                 <p className='text-2xl mb-8 font-semibold'>Choose Date</p>
            <div className='flex items-center gap-4 max-sm:flex-col '>
                <ChevronLeftIcon className=' w-[2em] h-[2em] max-sm:hidden' />
                <span className='flex gap-5 max-sm:flex-col'>
                    {Object.keys(props.dateselect).map((date) => (
                        <button key={date} onClick={()=>{setSelected(date)}} className={`h-[3em] w-[3em] p-7 flex items-center justify-center flex-col cursor-pointer rounded-sm ${selected === date ? 'bg-[#f74566] text-white': 'border-1 border[#f74566]'}`}>
                            <span>{new Date(date).getDate()}</span>
                            <span>{new Date(date).toLocaleDateString("en-US", { month: 'short' })}</span>
                        </button>
                    ))}
                </span>

                <ChevronRightIcon className='w-[2em] h-[2em] max-sm:hidden' />
            </div>
            </div>
           


             <button onClick={clickhandler} className='bg-[#f74566] w-[8em] h-[3em] rounded-sm cursor-pointer'>Book Now</button>


        </div>
    )
}

export default Datetime
