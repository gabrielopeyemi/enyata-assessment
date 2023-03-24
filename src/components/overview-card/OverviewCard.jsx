import { handleOverviewIcon } from '../../utils/handleOverviewIcon';
import React from 'react';


export default function OverviewCard({data, title}) {
  const Title = title.replace('/', '');
  console.log({ data, Title })
  return (
    <div className='shadow-md p-2 mt-[44px] rounded-[10px] '>
      <div className='flex items-center justify-between mb-[23px]'>
        <h3 className='capitalize font-bold text-lg'>{Title}</h3>
        <img 
            src={handleOverviewIcon(Title)} 
            alt={''} 
            width={100} 
            height={100} 
            className='w-[17px] h-[17px] ' 
        />
      </div>
      <div>
        <h3>{data.count}</h3>
        <span className='text-forestGreen text-9'>20 More than than yesterday</span>
      </div>
    </div>
  )
}
