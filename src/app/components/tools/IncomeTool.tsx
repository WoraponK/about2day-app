'use client'

import React from 'react'

// Icons
import A2dIcon from '../icons/A2dIcon'

function IncomeTool() {
  return (
    <div className='grid grid-cols-1'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl'>
        <A2dIcon type='in-logo' size={35} />
        <h2 className='text-xl'>Income</h2>
      </div>
      <div className='bg-clr-accent p-6 space-y-6 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        <h3 className='text-center text-2xl'>Choose . . .</h3>
        <form className='flex flex-col justify-center space-y-6'>
          <ul className='grid grid-cols-6 gap-4'>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'foods'} id='foods' className='hidden peer' />
              <label htmlFor="foods" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='foods'>
                <A2dIcon type='in-foods' size={40} />
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'gaming'} id='gaming' className='hidden peer' />
              <label htmlFor="gaming" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='gaming'>
                <A2dIcon type='in-gaming' size={40} />
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'house'} id='house' className='hidden peer' />
              <label htmlFor="house" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='house'>
                <A2dIcon type='in-house' size={40} />
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'phone'} id='phone' className='hidden peer' />
              <label htmlFor="phone" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='phone'>
                <A2dIcon type='in-phone' size={30} />
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'shopping'} id='shopping' className='hidden peer' />
              <label htmlFor="shopping" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='shopping'>
                <A2dIcon type='in-shopping' size={35} />
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'tools'} id='tools' className='hidden peer' />
              <label htmlFor="tools" className='cursor-pointer flex justify-center items-center h-14 w-14 bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='tools'>
                <A2dIcon type='in-tools' size={35} />
              </label>
            </li>
          </ul>
          <div className='flex gap-4'>
            <label className='w-full border-b-2 border-clr-light flex items-center'>
              <input type="number" placeholder='0.00' className='p-2 w-full bg-transparent focus:outline-none    placeholder:text-clr-gray-light remove-arrow text-xl' />
              <span className='text-2xl'>฿</span>
            </label>
            <button className='bg-clr-light text-clr-dark px-4 rounded-lg font-semibold transition-colors hover:bg-clr-secondary-1 hover:text-clr-light'>ADD</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncomeTool