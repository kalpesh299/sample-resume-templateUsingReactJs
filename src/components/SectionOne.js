import React from 'react'


export const SectionOne = () => {
  return (
    <div className=' w-full h-56 flex justify-evenly '>
<div className="  w-1/6">
<img src='https://t3.ftcdn.net/jpg/06/11/37/54/240_F_611375400_KdJYN9oP4YL9O6c2oAS5t9ycoRZu4TdL.jpg' className='w-full object-fit h-4/5' />
<h1 className='text-center'>PROFILE</h1>
</div>

<div className='w-1/3 border-b-2  border-black'>
<h1 className='font-bold text-7xl w-2/3 '>Jessica Green</h1>
<p class="mt-4 w-3/4 text-4xl tracking-wider">FREELANCER WRITER</p>
</div>
<div className='w-1/3 border-b-2  border-black'>
    <p className='mt-3'>
    Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, 
    aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti

    </p>
    <p className='mt-3'><span className='font-bold'>Email</span> :ABCD@gmail.com</p>
    <p className='mt-2'><span className='font-bold'>Website</span> :www.abcd.com</p>
    <p className='mt-2'><span className='font-bold'>Pho No</span> :1234567890</p>
</div>
    </div>
  )
}
