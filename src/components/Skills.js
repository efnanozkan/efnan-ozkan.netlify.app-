import React from 'react'

export default function Skills() {
  return (
    <div className='bg-stars' id='skills'> 
      <h1 className='text-5xl mx-auto text-center font-monospace text-white pt-10'> My Skills </h1>
      <div className='container w-3/4 md:w-2/4 mx-auto mt-7 pb-10'>
      <div className="mb-6 h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-full text-black font-monospace text-3xl px-4">  HTML </div>
      </div>
      <div className="mb-6 h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-3/4 text-black font-monospace text-3xl px-4">  CSS </div>
      </div>
      <div className="mb-6 h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-2/4 text-black font-monospace text-3xl px-4">  JavaScript </div>
      </div>
      <div className="mb-6 h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-3/4 text-black font-monospace text-3xl px-4"> Git & GitHub </div>
      </div>
      <div className="mb-6 h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-1/4 text-black font-monospace text-3xl px-4">  SQL </div>
      </div>
      <div className="h-14 w-full border-black border-8 bg-neutral-200">
         <div className="h-10 bg-alien w-full text-black font-monospace text-3xl px-4">  Adobe Illustrator </div>
      </div>
    </div>
    </div>
    
  )
}

