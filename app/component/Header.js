"use client"
import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll'
import Image from 'next/image';
// icons
import { BiX, BiMenuAltRight } from 'react-icons/bi'
// mediaQuery Hook 
import { useMediaQuery } from 'react-responsive'
import SearchMobile from './SearchMobile';
export default function Header() {
  // nav items 

  const navItems = [
    {
      name: 'Home',
      to: 'home'
    },
    {
      name: 'Cars',
      to: 'cars'
    },
    {
      name: 'About',
      to: 'about'
    },
    {
      name: 'Why Us',
      to: 'why'
    },
    {
      name: 'Testimonial',
      to: 'testimonial'
    },
    {
      name: 'Contacts',
      to: 'contacts'
    },
    // {
    //   name: 'See All cars ',
    //   to: '/',
    //   className: 'xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto'

    // },


  ]

  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: '(min-width:1300px)'
  })
  useEffect(() => {
    
    const handelScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true)
      }
      else {
        setScroll(false)
      }
    }
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    // add eventListener 
    window.addEventListener('scroll', handelScroll);
    // remove eventListener
    return () => {
      window.removeEventListener('scroll', handelScroll);
    };
    
  })
  // console.log(scroll);
  return (
    <header className={`${scroll ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[100%] mx-auto z-20 transition-all duration-300`}>
      <div className=' xl:container mx-auto  flex flex-col xl:flex-row xl:items-center xl:justify-between'>
        <div className='flex justify-between items-center px-4 bg-white xl:bg-transparent'>
          {/* Logo */}
          <Link
            to='home'
            smooth={desktopMode}
            spy={true}
            className='cursor-pointer'
          >
            <Image src={'assets/icons/logo.svg'} width={194} height={64} alt='' />
          </Link>
          {/* nav open menu */}
          <div onClick={() => setNav(!nav)} className='xl:hidden cursor-pointer'>
            {nav ?
              (<BiX className='text-4xl' />) : (<BiMenuAltRight className='text-4xl' />)
            }
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'}  flex flex-col w-full bg-white overflow-hidden
      gap-y-6 font-bold xl:font-medium xl:flex-row 
      xl:w-max xl:gap-x-8  xl:h-max xl:bg-transparent xl-pb-0
      transition-all duration-150 text-center xl:text-left
      uppercase text-sm xl:text-[15px] xl:normal-case`}>
          
          {navItems.length > 0 && (navItems.map(navItem => (
            <Link key={navItem.name}
              className='cursor-pointer'
              to={navItem.to}
              activeClass='active'
              smooth={desktopMode}
              spy={true}
            >
              {navItem.name}
            </Link>
        
          )))
        }
          {/* <SearchMobile /> */}
        </nav>
      </div>
    </header>
  )
}
