"use client"
import React, { useEffect, useState } from 'react'

// icons 
import { FaChevronUp } from 'react-icons/fa'
// Link
import { Link } from 'react-scroll'

export default function CopyRight() {
  const [isActive, setIsActive] = useState(false);
  // handel scroll
  useEffect(()=>{
    const handelScroll=()=>{
      if(window.scrollY>400){
        setIsActive(true)
      }
      else{
        setIsActive(false)
      }
    };
    // handel the event in scroll not in render
    window.addEventListener('scroll',handelScroll);
    // clean up the event listeners
    return()=>{
          window.removeEventListener('scroll',handelScroll);
    }
  })
  return (
    <Link
      to='home'
      smooth={true}
      className={`${!isActive && 'hidden'} fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white`}>
      <FaChevronUp className='text-xl' />
    </Link>
  )
}
