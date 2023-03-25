import React from 'react';
import Loading from './../../assets/GIF/loading.gif'

export default function Preloader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <img src={Loading} alt="loader" />
    </div>
  )
}
