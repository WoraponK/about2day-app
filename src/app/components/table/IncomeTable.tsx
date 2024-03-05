'use client'

import React, { useEffect, useState } from 'react'
import moment from 'moment';

import A2dIcon from '../icons/A2dIcon'

import LanguageSwap from '../LanguageSwap';

interface Income {
  id: string;
  type: string;
  amount: number;
  date: string;
}

function IncomeTable() {
  const [income, setIncome] = useState<Income[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [language, setLanguage] = useState('');


  useEffect(() => {
    const fetchData = () => {
      const storedIncome = localStorage.getItem('income');
      if (storedIncome) {
        setIncome(JSON.parse(storedIncome) as Income[]);
      }
    }

    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
      }
    }

    fetchData();
    languageCheck();
  }, []);


  const handleShowAllClick = () => {
    setShowAll((prevShowAll) => !prevShowAll)
  }

  const totalAmount = income.reduce((acc, item) => acc + item.amount, 0)

  const formatDate = (value: string) => {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
  }

  const convertTypeToName = (type: string) => {
    switch (type) {
      case 'in-people':
        return <LanguageSwap en='People' th='คน' />

      case 'in-salary':
        return <LanguageSwap en='Salary' th='เงินเดือน' />
      case 'in-extra':
        return <LanguageSwap en='Extra' th='พิเศษ' />
      default:
        return <LanguageSwap en='Null' th='ว่าง' />
    }
  }


  return (
    <div className='flex flex-col'>
      <div className='flex items-center space-x-4'>
        <div className='bg-clr-light text-clr-dark py-1 px-4 w-fit rounded-t-xl font-semibold'>
          <LanguageSwap en='Income' th='รายรับ' />
        </div>
        <h2 className='font-semibold text-xl text-clr-secondary-2'><span className='text-sm uppercase'><LanguageSwap en='Total' th='รวม' /></span> {totalAmount.toFixed(2)}฿</h2>
      </div>
      <div className='bg-clr-accent h-fit rounded-r-xl rounded-bl-xl p-2'>
        <div className='grid grid-cols-3 justify-items-center pb-2 border-b border-clr-light/90 font-semibold'>
          <h2>
            <LanguageSwap en='Type' th='ชนิด' />
          </h2>
          <h2>
            <LanguageSwap en='Date' th='วันที่' />
          </h2>
          <h2>
            <LanguageSwap en='Amount' th='ราคา' />
          </h2>
        </div>
        <div className='pt-2 space-y-0'>
          {income.length > 0 ? (
            showAll ? (
              income.map((data) => (
                <>
                  <div
                    key={data.id}
                    className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'
                  >
                    <div className='absolute flex justify-center items-center w-full h-full opacity-0 transition-all group-hover:opacity-100'>
                      <div className='h-[2px] w-0 bg-clr-red transition-all duration-500 group-hover:w-full relative flex justify-center items-center'>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 justify-items-center pb-1 items-end transition-all group-hover:opacity-50'>
                      <div className='flex space-x-2'>
                        <div className='relative object flex justify-center items-center'>
                          <A2dIcon type={data.type} size={20} />
                        </div>
                        <p className='xl:block max-xl:hidden max-lg:block'>{convertTypeToName(data.type)}</p>
                      </div>
                      <p>{formatDate(data.date)}</p>
                      <p>{data.amount}฿</p>
                    </div>
                  </div>
                </>

              ))
            ) : (
              income.slice(0, 15).map((data) => (
                <div key={data.id} className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'>
                  <div className='absolute flex justify-center items-center w-full h-full opacity-0 transition-all group-hover:opacity-100'>
                    <div className='h-[2px] w-0 bg-clr-red transition-all duration-500 group-hover:w-full relative flex justify-center items-center'>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 justify-items-center pb-1 items-end transition-all group-hover:opacity-50'>
                    <div className='flex space-x-2'>
                      <div className='relative object flex justify-center items-center'>
                        <A2dIcon type={data.type} size={20} />
                      </div>
                      <p className='xl:block max-xl:hidden max-lg:block'>{convertTypeToName(data.type)}</p>
                    </div>
                    <p>{formatDate(data.date)}</p>
                    <p>{data.amount}฿</p>
                  </div>
                </div>
              ))
            )) : (
            <p className='text-center'>
              <LanguageSwap en='No Income Yet.' th='ไม่มีข้อมูลรายรับ' />
            </p>
          )}
          <div className='pt-4'>
            {!showAll && income.length > 15 && (
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                <LanguageSwap en='Show all' th='แสดงทั้งหมด' /> <span className='text-sm'>({income.length} <LanguageSwap en='rows' th='แถว' />)</span>
              </p>
            )}

            {showAll && (
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                <LanguageSwap en='Show less' th='แสดงลดลง' />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )

}

export default IncomeTable