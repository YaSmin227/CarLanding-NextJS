"use client"
import React from 'react'
// Image
import Image from 'next/image';
// motion 
import { motion } from "framer-motion"
// import {motion,easeInOut} from 'next/motion';
// variants
import { fadeIn } from '@/variants';

export default function Brands() {
  // car brands
  const carBrands = [
    {
      name: 'ford.svg',
      width: '85',
      height: '32'
    },
    {
      name: 'mercedes.svg',
      width: '60',
      height: '60'
    },
    {
      name: 'audi.svg',
      width: '85',
      height: '50'
    },
    {
      name: 'bmw.svg',
      width: '60',
      height: '60'
    },
    {
      name: 'vw.svg',
      width: '60',
      height: '60'
    },
    {
      name: 'skoda.svg',
      width: '60',
      height: '60'
    },
    {
      name: 'mazda.svg',
      width: '62',
      height: '50'
    }
  ]
  return (
    <section className='xl:pt-16 xl:h-[200px] bg-white flex flwx-col justify-center mt-16 xl:mt-0'>
      <motion.div 
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewPort={{ once: false, amount: 0.6 }}
      className="container mx-auto">
        {/* brand wrapper */}
        <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
          {
            carBrands.length > 0 && carBrands.map((brand) => (
              <div className='' key={brand.name}>
                {
                  <Image
                    src={`/assets/icons/brands/${brand.name}`}
                    width={brand.width}
                    height={brand.height}
                    alt='' />

                }
              </div>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}
