import { handleOverviewIcon } from '../../utils/handleOverviewIcon';
import React from 'react';


export default function OverviewCard({data, title}) {
  const Title = title.replace('/', '');
  return (
    <div data-testid={'card'} className='shadow-md p-2 mt-[44px] rounded-[10px] bg-white'>
      <div data-testid={'card-body'} className='flex items-center justify-between mb-[23px]'>
        <h3 data-testid={'title'} className='capitalize font-bold text-lg'>{Title}</h3>
        <img 
            src={handleOverviewIcon(Title)} 
            alt={'card'} 
            width={100} 
            height={100} 
            className='w-[17px] h-[17px] ' 
        />
      </div>
      <div>
        <h3 data-testid={'count'}>{data.count}</h3>
        <span data-testid={'description'} className='text-forestGreen text-9'>20 More than than yesterday</span>
      </div>
    </div>
  )
}
