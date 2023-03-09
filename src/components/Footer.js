import React from 'react'
import cancel from '.././assets/cancel.png'
import { useEffect } from 'react'

export default function Footer() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  
  return (
    <div className='bg-primary pt-14'> 
    <div className='flex text-center mx-auto justify-center gap-3'> 
    <p className='text-white font-monospace text-4xl'> Press </p>
        <button className='' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}> 
        <img className='text-white w-7 h-7' alt='cancel' src={cancel} />
        </button>
     <p className='text-white font-monospace text-4xl'> to try again </p>
    </div>
     
      <div className='bg-ground bg-contain  w-full h-20'>
       </div>
    </div>
    
  )
}
