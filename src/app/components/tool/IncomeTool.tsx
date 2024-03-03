'use client'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

// Icons
import A2dIcon from '../icons/A2dIcon'

interface Income {
  id: string;
  type: string;
  amount: number;
  date: string;
}

function IncomeTool() {

  const [income, setIncome] = useState<Income[]>([]);
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const storedIncome = localStorage.getItem('income');
    if (storedIncome) {
      setIncome(JSON.parse(storedIncome) as Income[]);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newIncome: Income = {
      id: uuidv4(),
      type: selected,
      amount: parseInt(amount),
      date: new Date().toISOString()
    }

    if (newIncome.type) {
      income.unshift(newIncome)
    }

    localStorage.setItem('income', JSON.stringify(income));

    setAmount('')

    location.reload();
  }
  return (
    <div className='grid grid-cols-1 place-self-end xl:w-full max-sm:w-full'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl'>
        <A2dIcon type='in-logo' size={35} />
        <h2 className='text-xl'>Income</h2>
      </div>
      <div className='bg-clr-accent p-2 space-y-4 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        <h3 className='text-center text-2xl'>Choose . . .</h3>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center space-y-6'>
          <ul className='grid grid-cols-4 gap-2'>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-people'} id='in-people' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-people" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='People'>
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='in-people' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-extra'} id='in-extra' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-extra" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Extra'>
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='in-extra' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-salary'} id='in-salary' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-salary" className='cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Salary'>
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='in-salary' size={35} />
                </div>
              </label>
            </li>
          </ul>
          <div className='flex gap-4'>
            <label className='w-full border-b-2 border-clr-light flex items-center'>
              <input
                type="number"
                placeholder='0.00'
                className='p-2 w-full bg-transparent focus:outline-none placeholder:text-clr-gray-light remove-arrow text-xl'
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required />
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