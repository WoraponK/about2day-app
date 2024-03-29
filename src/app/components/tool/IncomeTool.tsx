'use client'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

// Icons
import A2dIcon from '../icons/A2dIcon'

import LanguageSwap from '../LanguageSwap';

import { Finance } from '@/app/types';

function IncomeTool({income, setIncome}: {income:Finance[], setIncome:any}) {
  const [language, setLanguage] = useState('');
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
      }
    }

    const fetchData = () => {
      const storedIncome = localStorage.getItem('income');
      setIncome(storedIncome ? JSON.parse(storedIncome) : []);
    }

    languageCheck();
    fetchData();
  }, []);

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();

      const newIncome: Finance = {
        id: uuidv4(),
        type: selected,
        amount: parseInt(amount),
        date: new Date().toISOString(),
        model: 'income'
      }

      if (selected && newIncome.amount > 0) {
        const existingIncome = localStorage.getItem('income');
        const parseExistingIncome = existingIncome ? JSON.parse(existingIncome) : [];

        const updatedIncome = [newIncome, ...parseExistingIncome];

        setIncome(updatedIncome)

        localStorage.setItem('income', JSON.stringify(updatedIncome));
  
        setAmount('')
      } else {
        console.error('Please select an expense type and enter a valid amount.')
      }
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <div className='flex flex-col h-full xl:w-full max-sm:w-full md:h-fit'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl h-fit'>
        <A2dIcon type='in-logo' size={35} />
        <h2 className='text-xl font-semibold'>
          <LanguageSwap en='Income' th='รายรับ' />
        </h2>
      </div>
      <div className='bg-clr-accent p-2 space-y-4 rounded-tr-xl rounded-br-xl rounded-bl-xl h-full flex flex-col md:h-fit'>
        <h3 className='text-center text-2xl'>
          <LanguageSwap en='Choose . . .' th='เลือก . . .' />
        </h3>
        <form onSubmit={handleSubmit} className='flex flex-col justify-between space-y-6 h-full'>
          <ul className='grid grid-cols-4 gap-2'>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-people'} id='in-people' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-people" className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title={language === 'en' ? 'People' : 'คน'}>
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='in-people' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-extra'} id='in-extra' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-extra" className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title={language === 'en' ? 'Extra' : 'พิเศษ'}>
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='in-extra' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input type="radio" name="income" value={'in-salary'} id='in-salary' className='hidden peer' onChange={(e) => setSelected(e.target.value)} />
              <label htmlFor="in-salary" className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title={language === 'en' ? 'Salary' : 'เงินเดือน'}>
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
            <button className='bg-clr-light text-clr-dark px-4 rounded-lg font-semibold transition-all hover:bg-clr-secondary-1 hover:text-clr-light active:scale-95'>
              <LanguageSwap en='Add' th='เพิ่ม' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IncomeTool