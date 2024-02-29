'use client'

import React from 'react'

// Icons
import A2dIcon from '../icons/A2dIcon'

function ExpensesTool() {
  return (
    <div className='grid grid-cols-1'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl'>
        <A2dIcon type='ex-logo' size={35} />
        <h2 className='text-xl'>Expenses</h2>
      </div>
      <div className='bg-clr-accent p-2 space-y-4 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        <h3 className='text-center text-2xl'>Choose . . .</h3>
        <form className='flex flex-col justify-center space-y-6'>
          <ul className='grid grid-cols-4 gap-2'>
            <li className='flex justify-center items-center'>
              <input type="radio" name="expenses" value={'ex-people'} id='ex-people' className='hidden peer' />
              <label htmlFor="ex-people" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='People'>
                <A2dIcon type='ex-people' size={35}/>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="expenses" value={'ex-extra'} id='ex-extra' className='hidden peer' />
              <label htmlFor="ex-extra" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Extra'>
                <A2dIcon type='ex-extra' size={35}/>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="expenses" value={'ex-salary'} id='ex-salary' className='hidden peer' />
              <label htmlFor="ex-salary" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Salary'>
                <A2dIcon type='ex-salary' size={35}/>
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

export default ExpensesTool