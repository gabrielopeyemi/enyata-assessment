import React from 'react'

export default function Button({title, onClick}) {
  return (
    <button 
      onClick={onClick} 
      data-testid={'button'}
      className='bg-celticBlue w-full p-[12px] rounded-[6px] text-md text-white mb-8'
      >{title}</button>
  )
}
