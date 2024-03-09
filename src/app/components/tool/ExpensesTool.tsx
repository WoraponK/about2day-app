'use client'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

// Icons
import A2dIcon from '../icons/A2dIcon'

import LanguageSwap from '../LanguageSwap';
import { Finance } from '@/app/types';

function ExpensesTool({expenses, setExpenses}: {expenses:Finance[], setExpenses:any}) {
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
      }
    }

    const fetchData = () => {
      const storedExpenses = localStorage.getItem('expenses');
      setExpenses(storedExpenses ? JSON.parse(storedExpenses) : []);
    }

    languageCheck();
    fetchData();
  }, [])

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();


      const newExpenses: Finance = {
        id: uuidv4(),
        type: selected,
        amount: parseInt(amount),
        date: new Date().toISOString()
      }

      if (selected && newExpenses.amount > 0) {
        const existingExpenses = localStorage.getItem('expenses');
        const paraseExistingExpenses = existingExpenses ? JSON.parse(existingExpenses) : '';

        const updatedExpenses = [newExpenses, ...expenses]

        setExpenses(updatedExpenses)

        localStorage.setItem('expenses', JSON.stringify(updatedExpenses))
        
        setAmount('')
      } else {
        console.error('Please select an expense type and enter a valid amount.')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='grid grid-cols-1 h-fit'>
      <div className='bg-clr-primary flex items-center space-x-2 py-2 px-4 w-3/4 rounded-t-xl'>
        <div className='relative object w-auto h-auto flex justify-center items-center'>
          <A2dIcon type='ex-logo' size={35} />
        </div>
        <h2 className='text-xl font-semibold'>
          <LanguageSwap en='Expenses' th='รายจ่าย' />
        </h2>
      </div>
      <div className='bg-clr-accent p-2 space-y-4 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        <h3 className='text-center text-2xl'>
          <LanguageSwap en='Choose . . .' th='เลือก . . .' />
        </h3>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center space-y-6'>
          <ul className='grid grid-cols-4 gap-2'>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-foods'}
                id='ex-foods'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-foods"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'Foods' : 'อาหาร'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-foods' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-gaming'}
                id='ex-gaming'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-gaming"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'Gaming' : 'เกม'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-gaming' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-house'}
                id='ex-house'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-house"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'House' : 'บ้าน'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-house' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-phone'}
                id='ex-phone'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-phone"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'Phone' : 'มือถือ'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-phone' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-shopping'}
                id='ex-shopping'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-shopping"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'Shopping' : 'ช็อปปิ้ง'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-shopping' size={35} />
                </div>
              </label>
            </li>
            <li className='flex justify-center items-center'>
              <input
                type="radio"
                name="expenses"
                value={'ex-tools'}
                id='ex-tools'
                className='hidden peer'
                onChange={(e) => setSelected(e.target.value)}
              />
              <label
                htmlFor="ex-tools"
                className='transition-all active:scale-95 cursor-pointer flex justify-center items-center h-14 w-full bg-clr-secondary bg-clr-gray-3 rounded-lg hover:bg-clr-gray-2 peer-checked:bg-clr-primary'
                title={language === 'en' ? 'Tools' : 'เครื่องมือ'}
              >
                <div className='relative object w-auto h-auto flex justify-center items-center'>
                  <A2dIcon type='ex-tools' size={35} />
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
                required
              />
              <span className='text-2xl'>฿</span>
            </label>
            <button className='bg-clr-light text-clr-dark px-4 rounded-lg font-semibold hover:bg-clr-secondary-1 hover:text-clr-light transition-all active:scale-95'>
              <LanguageSwap en='Add' th='เพิ่ม' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExpensesTool