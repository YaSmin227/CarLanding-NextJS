import React from 'react'
// components
import Brands from './Brands'
import CarSlider from './CarSlider'
export default function Cars() {
  return (
    <div className='min-h-screen items-center bg-white' id='cars'>
      <div className='container mx-auto'>
        <Brands />
        <CarSlider />
      </div>
    </div>
  )
}
