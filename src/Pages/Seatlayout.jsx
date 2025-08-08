import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Movies from './Movies'
import Loading from '../Components/Loading'
import { ArrowRight, Ban, Clock, User } from 'lucide-react'
import Isotimeformat from '../Components/Isotimeformat'
import toast from 'react-hot-toast'
import { useUser } from '@clerk/clerk-react'


const Seatlayout = () => {

  const { user } = useUser()


  const proceedclick = () => {
    if (!user) {
      toast.error(`Please Login To Proceed`)
    } else if (selectedseat.length == 0) {
      toast('Please Select Atleast 1 Seat')
    } else {
      window.location.href='https://buy.stripe.com/test_3cI00l0t9bTi3p97DGdwc00'
    }
  }

  const grouprows = [['A', 'B'], ['C', 'D'], ['E', 'F'], ['G', 'H'], ['I', 'J']]

  const { id, date } = useParams()

  const [selectedseat, setSelectedseat] = useState([])
  const [selectedtime, setSelectedtime] = useState(null)
  const [show, setShow] = useState(null)

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id)
    if (show) {
      setShow({
        Movie: show,
        datetime: dummyDateTimeData,
      })
    }
  };

  const handleclick = (seatId) => {
    if (!selectedtime) {
      return toast("Please Select Time")
    }
    if (!selectedseat.includes(seatId) && selectedseat.length > 4) {
      return toast("You Can Select Only 5 Seats")
    }
    setSelectedseat(prev =>
      prev.includes(seatId)
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );

  }



  const renderseats = (row, count = 9) => (
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap justify-center items-center gap-2'>
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button key={seatId} onClick={() => { handleclick(seatId) }} className={`h-8 w-8 max-sm:h-6 max-sm:w-6 rounded border-1 border-[#f74566]/60  cursor-pointer ${selectedseat.includes(seatId) && 'bg-[#f74566] text-white'}`} >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  )

  useEffect(() => {
    getShow();
  })


  return show ? (
    <div className=' p-[8em] max-sm:p-[1em] flex max-sm:flex-col'>
      <div className='h-fit basis-[20%] mt-40 max-sm:mt-20 rounded-xl flex flex-col border-1 border-[#f74566] p-8 gap-2 bg-[#f74566]/10'>
        <p className='text-xl'>Available Timings</p>
        <div className='flex flex-col gap-1 '>
          {show.datetime[date].map((items) => (
            <div key={items.time} onClick={() => { setSelectedtime(items) }} className={`flex cursor-pointer p-2 gap-4 items-center justify-c ${selectedtime?.time === items.time ? 'bg-[#f74566] rounded-xl text-white' : 'hover:bg-[#f74566]/20 hover:rounded-xl'}`}>
              <Clock className='h-[2em]' />
              <p className=''>{Isotimeformat(items.time)}</p>
            </div>
          ))}
        </div>
      </div>


      <div className='basis-[80%] flex flex-col items-center py-16 '>
        <div className='w-full  flex  flex-col items-center gap-4 '>
          <h1 className='text-2xl '>Select Your Seat</h1>
          <img src={assets.screenImage} alt="Screen" />
          <p className='text-gray-500'>Screen Side</p>
        </div>

        <div className='flex font-semibold items-center mt-10 text-sm max-sm:text-[12px] text-gray-50'>
          <div className='flex flex-col  mb-6'>
            {grouprows[0].map(row => renderseats(row))}
          </div>
        </div>


        <div className='flex flex-wrap justify-center text-sm max-sm:text-[12px] font-semibold gap-11'>
          {grouprows.slice(1).map((group) => (
            <div>
              {group.map(row => renderseats(row))}
            </div>
          ))}
        </div>

        <button onClick={proceedclick} className='bg-[#f74566] px-8 py-3 rounded-4xl flex mt-20 cursor-pointer'>Proceed To CheckOut<ArrowRight /> </button>
      </div>
    </div>
  ) :
    <Loading />
}

export default Seatlayout
