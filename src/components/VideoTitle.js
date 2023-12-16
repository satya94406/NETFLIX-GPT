import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-4 absolute bg bg-gradient-to-r from-zinc-500 text-gray-200'>
        <h1 className='font-bold text-4xl '>{original_title}</h1>
        <p className='w-1/2 font-light text-xs'>{overview}</p>
        
        <div>
            <button className='bg-gray-600 text-lg px-1 rounded-lg mx-1 hover:bg-slate-800'>⏯️ Play</button>
            <button className='bg-gray-600 text-sm rounded-lg p-1'>  ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle