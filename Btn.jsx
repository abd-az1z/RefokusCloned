import React from 'react';
import { IoMdReturnRight } from "react-icons/io";


function Btn({title = "Get Started"}) {
  return (
    <div className='font-extralight font-sans text-sm flex items-center gap-3 max-w-40 px-4 py-2 bg-zinc-200 text-black rounded-full'>
        <span>{title}</span>
        <IoMdReturnRight className='text-xs' />
    </div>
  )
}

export default Btn