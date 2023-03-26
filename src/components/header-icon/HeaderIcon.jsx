import React from 'react'

export default function HeaderIcon({
    src,
    alt,
    className,
    dataTestid
}) {
  return (
    <img 
        data-testid={dataTestid}
        src={src} 
        alt={alt}  
        className={`w-[24px] h-[24px] ${className}`} 
    />
  )
}
