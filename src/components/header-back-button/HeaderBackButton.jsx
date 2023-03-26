import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '../../assets/SVG/arrow_right.svg';
import Image from '../image/Image';

export default function HeaderBackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className='flex items-center gap-1'>
            <Image src={ArrowRight} alt='arrow-right' className='w-[12px] h-[12px]' />
            <span>Back</span>
        </button>
    )
}
