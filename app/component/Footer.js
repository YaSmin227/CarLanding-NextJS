"use client"
import React from 'react'
import Image from 'next/image';
// motion 
import { motion } from "framer-motion"
// variants
import { fadeIn } from '@/variants';
// icons 
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
//  Link 
import { Link } from 'react-scroll';
import CopyRight from './CopyRight';
// next link
// import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='pt-20 bg-white z-20' id='contacts'>
      <div className='container mb-24 mx-auto'>
        {/* grid */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewPort={{ once: false, amount: 0.2 }}
          className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          {/* frist part  */}
          <div className='flex flex-col gap-y-8 flex-1'>
            {/* logo */}
            <Link
              to={'home'}
              smooth={true}
              spy={true}
              className='cursor-pointer'>
              <Image src={'/assets/icons/logo.svg'} width={200} height={200} alt='' />
            </Link>
            {/* text */}
            <div className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* phone & email */}
            <div className='flex flex-col gap-y-4 font-semibold'>
              {/* phone */}
              <div className='flex items-center gap-x-[10px]'>
                <FaPhone />
                <div className='font-medium'>(123)456-7890</div>
              </div>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <FaEnvelope />
                <div className='font-medium'>office@carland.com</div>
              </div>
            </div>
          </div>
          {/* second part Links */}
          <div className=' flex-1 flex flex-col xl:items-center'>
            <h3 className='h3 font-bold mb-8'>
              Company
            </h3>
            <ul className='flex flex-col font-semibold gap-y-4'>
              <li>
                <Link to='home'>New York</Link>
              </li>
              <li>
                <Link to='home'>Careers</Link>
              </li>
              <li>
                <Link to='home'>Mobile </Link>
              </li>
              <li>
                <Link to='home'>Blog </Link>
              </li>
              <li>
                <Link to='home'>How we work </Link>
              </li>
            </ul>
          </div>
          {/* third part Program */}
          <div>
            <div className='flex-1'>
              <h3 className='h3 font-bold mb-8'></h3>
              <div className='flex flex-col gap-y-4'>
                <div className='flex gap-y-2 gap-x-2'>
                  <div className='text-secondary'>Mon-Fri:</div>
                  <div className='font-semibold'>09:00AM - 5:00PM</div>
                </div>
                <div className='flex gap-y-2 gap-x-2'>
                  <div className='text-secondary'>Sat:</div>
                  <div className='font-semibold'>09:00AM - 4:00PM</div>
                </div>
                <div className='flex gap-y-2 gap-x-2'>
                  <div className='text-secondary'>Sun:</div>
                  <div className='font-semibold'>Colsed</div>
                </div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>
              NewsLetter
            </h3>
            <div className='mb-9 text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* form */}
            <form className='flex gap-x-2 h-14'>
              <input
              type='text'
              placeholder='Your email'
              className='outline-none bg-white h-full border roundes-lg pl-4 focus:border-accent'
              />
              <button type='submit' className='btn btn-sm btn-accent w-24'>Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
      <CopyRight/>
    </footer>
  )
}
