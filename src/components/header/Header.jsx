import React from 'react';
import Notification from '../../assets/SVG/notifications.svg'
import User from '../../assets/SVG/user.svg'
import Line from '../../assets/SVG/line.svg';
import Dots from '../../assets/SVG/dots.svg';
import HeaderIcon from '../header-icon/HeaderIcon';
import HeaderBackButton from '../header-back-button/HeaderBackButton';

export default function Header({showBackButton}) {
    
    return (
        <div className='flex justify-between py-[12px] shadow-md px-[5px] md:px-2' data-testid={'header-dev'}>
            {showBackButton ? <HeaderBackButton /> : <div />}
            <div className='flex items-center gap-[5px] md:gap-2'>
                <HeaderIcon dataTestid={'notification-icon'} src={Notification}  alt={'notification'} className='hover:bg-[#c5c5c5] rounded-full p-[2px]' />
                <HeaderIcon dataTestid={'line-icon'} src={Line} alt={'line-image'} />
                <HeaderIcon dataTestid={'user-icon'}  src={User} alt={'user-icon'} />
                <span className='whitespace-nowrap'>John Doe</span>
                <HeaderIcon dataTestid={'dots-icon'} src={Dots} alt={'dots-icon'} />
            </div>
        </div>
    )
}
