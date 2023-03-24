import React from 'react';
import Notification from '../../assets/SVG/notifications.svg'
import User from '../../assets/SVG/user.svg'
import Line from '../../assets/SVG/line.svg';
import Dots from '../../assets/SVG/dots.svg';

export default function Header() {
  return (
    <div className='flex justify-end py-[12px] shadow-md gap-2 pr-2'>
        <img 
            src={Notification} 
            alt={''} 
            width={100} 
            height={100} 
            className='w-[24px] h-[24px] hover:bg-[#c5c5c5] rounded-full p-[2px]' 
        />
        <img 
            src={Line} 
            alt={''} 
            width={100} 
            height={100} 
            className='w-[24px] h-[24px]' 
        />
        <img   
            src={User} 
            alt={''} 
            width={100} 
            height={100} 
            className='w-[24px] h-[24px]' 
        />
        <span>John Doe</span>
        <img 
            src={Dots} 
            alt={''} 
            width={100} 
            height={100} 
            className='w-[24px] h-[24px]' 
        />
    </div>
  )
}
