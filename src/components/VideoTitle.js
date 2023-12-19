import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[1%] md:pt-[10%] px-2 md:px-4 absolute bg bg-gradient-to-r from-zinc-500 text-gray-200'>
        <h1 className=' font-bold text-xl md:text-4xl '>{original_title}</h1>
        <p className='hidden md:inline-block w-1/2 font-light text-xs'>{overview}</p>
        
        <div>
            <button className='   bg-gray-600 text-lg px-2 rounded-lg mx-1 hover:bg-slate-800'>⏯️ Play</button>
            <button className=' hidden md:inline-block bg-gray-600 text-sm rounded-lg p-1'>  ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle