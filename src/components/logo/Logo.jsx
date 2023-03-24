import React from 'react';
import Img from '../../assets/PNG/logo.png'

export default function Logo({className}) {
  return (
    <img 
        src={Img} 
        alt={''}
        className={className} 
    />
  )
}
