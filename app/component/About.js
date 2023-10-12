'use client'
import React from 'react'
// next img
import Image from 'next/image';

// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineOutlinedFlag
} from 'react-icons/md';
// react count up
import CountUp from 'react-countup';
// useInview
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '@/variants';
export default function About() {
  // inview
  const [ref, inview] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='min-h-screen mt-16 mb-10  xl:mt-10   flex items-center' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center xl:flex-row xl:justify-between'>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewPort={{ once: false, amount: 0.6 }}
            className='flex-1 mb-8 xl:mb-0'>
            <Image
              className='rounded-[20px]'
              src={'/assets/images/about/car01.png'}
              width={600}
              height={448}
              alt='about'
            />
          </motion.div>
          {/*text and state  */}
          {/* test */}
          <div className='flex-1 flex items-center xl:justify-center'>
            <div className='xl:max-w-[517px]'>
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.6 }}
                className='h2'>Car services simplified.</motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.6 }}
                className='mb-[40px] max-w-md'>
                Rent,choose , and repair with ease , Our convenient locations,
                diverse car types , and reliable repair points ensure aseamless car experience.
              </motion.p>
              {/* state */}
              {/* car types */}
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.6 }}
                className='flex items-center gap-x-8 mb-12' >
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className='text-xl font-black mb-2'>
                    {
                      inview ? (
                        <CountUp start={0} end={50} duration={3} delay={.5} />
                      ) : null
                    }
                    +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    car <br />types
                  </div>
                </div>
                {/* rental outlet */}
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className='text-xl font-black mb-2'>
                    {
                      inview ? (
                        <CountUp start={0} end={135} duration={3} delay={.5} />
                      ) : null
                    }
                    +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    rental <br />outlets
                  </div>
                </div>
                {/* repair points */}
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className='text-xl font-black mb-2'>
                    {
                      inview ? (
                        <CountUp start={0} end={50} duration={3} delay={.5} />
                      ) : null
                    }
                    +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                    car <br />types
                  </div>
                </div>
              </motion.div>
              {/* btn */}
              <motion.button
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewPort={{ once: false, amount: 0.6 }}
                className=' xl:block bg-accent hover:bg-accent-hover
          rounded-[10px] w-full h-16 uppercase font-meduim text-white tracking-[2px] text-[13px] max-w-[184px]'>
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
