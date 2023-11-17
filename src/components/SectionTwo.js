import React from 'react'

export const SectionTwo = () => {
  return (
    <div className=' w-full h-56 flex justify-evenly '>
    <div className=" w-1/6">
    <img src='https://as2.ftcdn.net/v2/jpg/00/99/30/87/1000_F_99308745_Yf8JECiB27gb92JgBOqMLTKniAicKppi.jpg' className='w-full object-fit h-4/5' />
    <h1 className='text-center'>Work</h1>
    </div>
    
    <div className='w-1/3 border-b-2  border-black'>
    <h1 className='font-bold text-5xl w-2/3 mt-4 '>Green Tech Pt.LTD</h1>
    <p class="mt-4 w-3/4 text-4xl tracking-wider">New Zeland</p>
    </div>
    <div className='w-1/3 border-b-2  border-black mt-4'>
       <h1 className='font-bold text-3xl'>Prev Experience</h1>
       <p className='mt-3'><span className='font-bold'>2021-2022</span> :Byjus</p>
    <p className='mt-2'><span className='font-bold'>2019-2020</span> :proTech Infra</p>
    <p className='mt-2'><span className='font-bold'>Internship</span> :MyLab Solutions</p>
    </div>
        </div>
  )
}
