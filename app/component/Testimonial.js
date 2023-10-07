"use client"
import React from 'react'
// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper style
import 'swiper/css';
import 'swiper/css/pagination';

// import required module
import { Pagination } from 'swiper/modules';
// icons
import { FaQuoteLeft } from 'react-icons/fa'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '@/variants';
// next imge
import Image from 'next/image';
export default function Testimonial() {
  // data
  const testimonialData = [
    {
      message: 'they trruly exceeded my expectation and made my car rental experiences a delight',
      avart: '/assets/images/testimonial/avatar.png',
      name: 'Jane Doe',
      job: 'Photographar & Videography',
    }
    ,
    {
      message: 'they trruly exceeded my expectation and made my car rental experiences a delight',
      avart: '/assets/images/testimonial/avatar.png',
      name: 'Jane Doe',
      job: 'Photographar & Videography',
    }
  ]
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewPort={{ once: false, amount: 0.6 }}
     className='x:h-screen mt-16 mb-16 section flex items-center ' id='testimonial'>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={ [Pagination] }
        className='h-[450px] xl:h-[400px]'>
        {
          testimonialData.map((person, index) => {
            const { message, avart, name, job } = person;
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-col justify-center items-center text-center'>
                  <FaQuoteLeft className='text-7xl text-accent
                    mb-6'/>
                  <div className='font-medutext-2xl xl:text-4xl max-w-[874px] mb-12 font-medium '>{message}</div>
                  <Image
                    src={avart}
                    width={64}
                    height={64}
                    alt=''
                    className='mb-4'
                  />
                  <div className='text-lg font-meduim'>
                    {name}
                  </div>
                  <div className='text-secondary'>{job}</div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </motion.div>
  )
}
