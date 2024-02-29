'use client'

import React from 'react'

import A2dIcon from '../icons/A2dIcon'

function IncomeTable() {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center space-x-4'>
        <div className='bg-clr-light text-clr-dark py-1 px-4 w-fit rounded-t-xl font-semibold'>
          Income
        </div>
        <h2 className='font-semibold text-xl text-clr-secondary-2'><span className='text-sm uppercase'>total</span> 600.00฿</h2>
      </div>
      <div className='bg-clr-accent h-full rounded-r-xl rounded-bl-xl p-2'>
        <div className='grid grid-cols-3 justify-items-center pb-2 border-b border-clr-light/90 font-semibold'>
          <h2>Type</h2>
          <h2>Date</h2>
          <h2>Price</h2>
        </div>
        <div className='pt-2 space-y-0 text-lg max-xl:text-base'>
          <div className='grid grid-cols-3 justify-items-center'>
            <div className='flex space-x-2'>
              <A2dIcon type='in-foods' size={20}/>
              <p className='xl:block max-xl:hidden max-lg:block'>Foods</p>  
            </div>
            <p>2024-02-29</p>
            <p>200.0฿</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeTable