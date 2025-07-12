import React from 'react'

const Loading = () => {
  return (
   <div className='flex justify-center items-center h-[100vh]'>
      <div className='animate-spin h-16 w-16 rounded-full border-2 border-t-[#f74566]'></div>
    </div>
  )
}

export default Loading
