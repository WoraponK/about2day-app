'use client'

import React, { useEffect, useState } from 'react'
import moment from 'moment';

import A2dIcon from '../icons/A2dIcon'

interface Expenses {
  id: string;
  type: string;
  amount: number;
  date: string;
}

function ExpensesTable() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses) as Expenses[]);
    }
  }, []);


  const handleShowAllClick = () => {
    setShowAll((prevShowAll) => !prevShowAll)
  }

  const totalAmount = expenses.reduce((acc, item) => acc + item.amount, 0)

  const formatDate = (value: string) => {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
  }

  const convertTypeToName = (type: string) => {
    switch (type) {
      case 'ex-foods':
        return 'Foods'
      case 'ex-gaming':
        return 'Gaming'
      case 'ex-shopping':
        return 'Shopping'
      case 'ex-tools':
        return 'Tools'
      case 'ex-house':
        return 'House'
      case 'ex-phone':
        return 'Phone'
      default:
        return 'Null'
    }
  }


  return (
    <div className='flex flex-col'>
      <div className='flex items-center space-x-4'>
        <div className='bg-clr-light text-clr-dark py-1 px-4 w-fit rounded-t-xl font-semibold'>
          Expenses
        </div>
        <h2 className='font-semibold text-xl text-clr-secondary-2'><span className='text-sm uppercase'>total</span> {totalAmount.toFixed(2)}฿</h2>
      </div>
      <div className='bg-clr-accent h-fit rounded-r-xl rounded-bl-xl p-2'>
        <div className='grid grid-cols-3 justify-items-center pb-2 border-b border-clr-light/90 font-semibold'>
          <h2>Type</h2>
          <h2>Date</h2>
          <h2>Price</h2>
        </div>
        <div className='pt-2 space-y-0'>
          {expenses.length > 0 ? (
            showAll ? (
              expenses.map((data) => (
                <div key={data.id} className='grid grid-cols-3 justify-items-center space-y-1'>
                  <div className='flex space-x-2'>
                    <div className='relative object w-auto h-auto flex justify-center items-center'>
                      <A2dIcon type={data.type} size={20} />
                    </div>
                    <p className='xl:block max-xl:hidden max-lg:block'>{convertTypeToName(data.type)}</p>
                  </div>
                  <p>{formatDate(data.date)}</p>
                  <p>{data.amount}฿</p>
                </div>
              ))
            ) : (
              expenses.slice(0, 15).map((data) => (
                <div key={data.id} className='grid grid-cols-3 justify-items-center space-y-1'>
                  <div className='flex space-x-2'>
                    <div className='relative object flex justify-center items-center'>
                      <A2dIcon type={data.type} size={20} />
                    </div>
                    <p className='xl:block max-xl:hidden max-lg:block'>{convertTypeToName(data.type)}</p>
                  </div>
                  <p>{formatDate(data.date)}</p>
                  <p>{data.amount}฿</p>
                </div>
              ))
            )) : (
            <p className='text-center'>No Expenses Yet.</p>
          )}
          <div className='pt-4'>
            {!showAll && expenses.length > 15 && (
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                Show All <span className='text-sm'>({expenses.length} rows)</span>
              </p>
            )}

            {showAll && (
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                Show Less
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesTable