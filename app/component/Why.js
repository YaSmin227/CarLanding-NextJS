"use client"
import React from 'react'
// next img
import Image from 'next/image';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '@/variants';
// icons
import { MdKey, MdHanshake, MdTrendingUp, MdHandshake } from 'react-icons/md'

export default function Why() {
  return (
    <section className='x:h-screen mt-16 mb-16 xl:mb-10 section flex items-center' id='why'>
      <div className='container m-auto'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewPort={{ once: false, amount: 0.6 }}
          className='h2 text-center'>
          Unmatached excellence and customr satisfactions
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewPort={{ once: false, amount: 0.6 }}
          className='max-w-[680px] text-center mx-auto mb-2'>Our dedicaiton to providing exceptional services sets us apart from hte competation. Ffom
          the moment you engage with us , we strive to exceed your expectation in every interaction.
        </motion.p>
        {/* car img */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewPort={{ once: false, amount: 0.6 }}
          className='flex justify-center mb-6 xl:mb-2'>
          <Image src={'/assets/images/why/car.svg'} width={1060} height={420} alt='' />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewPort={{ once: false, amount: 0.4 }}
          className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]'>
          {/* item1 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdKey className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>
              Rent Simply and quickly
            </h3>
            <p className='hidden xl:flex'>
              We prioritize your need and we go above and beyond to ansure your experiance with us is nothing short for outstanding.
            </p>
          </div>
          {/* item2 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdTrendingUp className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>
              Rent Simply and quickly
            </h3>
            <p className='hidden xl:flex'>
              We prioritize your need and we go above and beyond to ansure your experiance with us is nothing short for outstanding.
            </p>
          </div>
          {/* item3 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdHandshake className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>
              Rent Simply and quickly
            </h3>
            <p className='hidden xl:flex'>
              We prioritize your need and we go above and beyond to ansure your experiance with us is nothing short for outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
