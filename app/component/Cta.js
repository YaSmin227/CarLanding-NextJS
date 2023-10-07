"use client"
import React from 'react'
import Image from 'next/image';
// motion 
import { motion } from "framer-motion"
// import {motion,easeInOut} from 'next/motion';
// variants
import { fadeIn } from '@/variants';
export default function Cta() {
  return (
    <section className='pt-24 xl:pt-48 flex items-center bg-[#b2b7c2]/10' id='contacts'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row xl:items-center '>
          {/* text */}
          <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
            <div className='max-w-[520px] mx-auto order-2 md:order-none'>
              <motion.h2
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.2 }}
                className='h2'>Download our App now and hit the road with ease</motion.h2>
              <motion.p
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.2 }}
                className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</motion.p>
              {/* buttons */}
              <motion.div
                variants={fadeIn('right', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.2 }}
                className='flex gap-x-3 justify-center md:justify-start '>
                <button className=' btn-cta'>
                  <Image
                    src={'/assets/icons/buttons/google-play.svg'}
                    width={132}
                    height={36}
                    alt='' />
                </button>
                <button className=' btn-cta'>
                  <Image
                    src={'/assets/icons/buttons/app-store.svg'}
                    width={132}
                    height={36}
                    alt='' />
                </button>
              </motion.div>
            </div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewPort={{ once: false, amount: 0.2 }}
            className='flex flex-1 justify-center order-1 md:order-none'>
            <Image
              src={'/assets/images/cta/phone.svg'}
              width={320}
              height={640}
              alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
