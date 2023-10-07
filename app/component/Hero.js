"use client"
import React from 'react'
import Image from 'next/image';
// motion 
import { motion } from "framer-motion"
// import {motion,easeInOut} from 'next/motion';
// variants
import { fadeIn } from '@/variants';
export default function Hero() {
  return (
    <section className='xl:h-screen xl:h-[90hv] bg-[#b2b7c2]/10 mt-16 xl:mt-0' id='home' >
      <div className='container mx-auto h-full xl:pt-10 '>
        <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
          {/* text */}
          <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
            <motion.h1
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewPort={{ once: false, amount: 0.6 }}
              className='h1'>
              Explore the finest <span className='text-accent'>Global</span> {' '}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewPort={{ once: false, amount: 0.6 }}
              className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
              find your ideal ride for adventure with our divers range of affordable car rentals .
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewPort={{ once: false, amount: 0.8 }}
              className='flex gap-x-3 justify-center xl:justify-start'>
              <button className='btn-cta'>
                <Image src={'/assets/icons/buttons/app-store.svg'} width={132} height={36} alt='' />
              </button>
              <button className='btn-cta'>
                <Image src={'/assets/icons/buttons/google-play.svg'} width={132} height={36} alt='' />
              </button>
            </motion.div>
          </div>
          {/* img */}
          <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewPort={{ once: false, amount: 0.6 }}
          className='w-100 h-100 relative'>
            <Image
              src={'/assets/images/hero/car.svg'}
              width={200}
              height={160}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              33vw"
              style={{ height: '90%', width: '90%' }}
              alt=''
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
