'use client'

import React from 'react'

// Icons
import A2dIcon from '../icons/A2dIcon'

function IncomeTool() {
  return (
    <div className='grid grid-cols-1'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl'>
        <A2dIcon type='in-logo' size={35}/>
        <h2 className='text-xl'>Income</h2>
      </div>
      <div>
        <form className='flex flex-col'>
          <input type="radio" name="income" value={'foods'} id='foods'/>
          <label htmlFor="foods" className='h-8 w-8 bg-clr-primary'>
            Foods
          </label>
          <input type="radio" name="income" value={'foods'} id='foods'/>
          <label htmlFor="foods" className='h-8 w-8 bg-clr-primary'>
            Foods
          </label>
          <input type="number" />
        </form>
      </div>
    </div>
  )
}

export default IncomeTool