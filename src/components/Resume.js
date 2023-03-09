import React from 'react'
import dollar from '.././assets/dollar.png'


export default function Resume() {

    const onButtonClick = () => {
             fetch('EFNANOZKAN_cv.pdf').then(response => {
                response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'EFNANOZKAN_cv.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className='bg-hover-color py-24' id='resume'>
        <div className="flex flex-row flex-wrap mx-12  justify-between text-left">
            <div className='text-white text-xl'>
                <h1 className='font-monospace text-4xl text-white py-3 px-6'>Education</h1>
                <div className='flex gap-y-3 gap-x-1'>
                <img className='w-5 h-5 mt-1' alt='dollar' src={dollar} />
                <p>Ankara Yıldırım Beyazıt University 
                    <br/> Management Information Systems 
                    <br/> 4th Year
                    <br/> GPA: 3.6/4    
                    <br/> High Honor Student                
                </p>
                </div>
            </div>
            
            <div className='text-white text-xl'>
             <h1 className='font-monospace text-4xl text-white py-3 px-6'>Experience</h1>  
             <div className='flex gap-y-3 gap-x-1'> 
             <img className='w-5 h-5 mt-1' alt='dollar' src={dollar} />
             <p>Elmalı Tech & Investment Group 
                <br/> Front-end Intern 
                <br/>(October 2022 - November 2022)  
                <br/> <br/>
             </p>
             </div>
             <div className='flex gap-y-3 gap-x-1'>
             <img className='w-5 h-5 mt-1' alt='dollar' src={dollar} />
             <p>
                 Digital Transformation Office of the Turkish Presidency 
                <br/> Department of Information Technologies 
                <br/> Information Technologies Intern <br/> (July 2022- August 2022) 
                <br/> <br/>
            </p>
            </div>
            <div className='flex gap-y-3 gap-x-1'> 
            <img className='w-5 h-5 mt-1' alt='dollar' src={dollar} />
            <p>  Freelance Graphic Designer (June 2018 - May 2022)</p> 
            </div>
               
            </div>
            <div className='mt-9 md:mt-32'>
            <button className='font-monospace max-w-xl md:max-w-3xl text-2xl btn bg-alien text-black px-6 py-3' onClick={onButtonClick}>
                    Download My Resume
            </button>
            </div>
           

        </div>
    </div>
  )
}


