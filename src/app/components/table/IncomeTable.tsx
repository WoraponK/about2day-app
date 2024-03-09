'use client'

import React, { useState } from 'react'
import moment from 'moment';

import A2dIcon from '../icons/A2dIcon'

import LanguageSwap from '../LanguageSwap';
import Modal from '../Modal';

import { Finance } from '@/app/types';

function IncomeTable({ income, setIncome }: { income: Finance[], setIncome: any }) {
  const [showAll, setShowAll] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [getId, setGetId] = useState('');

  const toggleModal = () => setIsModal((prev: boolean) => !prev);

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

  const getIncomeId = (id: string) => {
    toggleModal();
    setGetId(id);
  }

  const handleDelete = (id: string) => {
    try {
      const incomeIndex = income.findIndex((ex) => ex.id === id);

      if (incomeIndex !== -1) {
        const updatedIncome = [...income];

        updatedIncome.splice(incomeIndex, 1);

        setIncome(updatedIncome);
        localStorage.setItem('income', JSON.stringify(updatedIncome));
        toggleModal();
      }
    } catch (e) {
      console.error(e);
    }
  }

  const InnerModal = () => (
    <div className='space-y-4'>
      <h3 className='text-2xl font-semibold text-center uppercase'>
        <LanguageSwap
          en='Want to delete this data?'
          th='ต้องการลบรายการนี้ใช่หรือไม่ ?'
        />
      </h3>
      <p className='text-lg text-center'>
        <LanguageSwap
          en='If you have done this, It will not be possible to revert your data.'
          th='ถ้าหากทำการยืนยัน จะไม่สามารถแก้ไขข้อมูลกลับมาได้'
        />
      </p>
      <div className='flex justify-end space-x-2'>
        <button
          className='btn border-none text-clr-light bg-clr-primary transition-colors hover:bg-clr-primary/80'
          onClick={() => handleDelete(getId)}
        >
          <LanguageSwap en='Sure' th='ยืนยัน' />
        </button>
        <button
          className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
          onClick={toggleModal}
        >
          <LanguageSwap en='Cancel' th='ยกเลิก' />
        </button>
      </div>
    </div>
  );


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
                <div key={data.id}>
                  <div
                    className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'
                    onClick={() => getIncomeId(data.id)}
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
                  {isModal && (
                    <Modal>
                      <InnerModal />
                    </Modal>
                  )}
                </div>
              ))
            ) : (
              income.slice(0, 15).map((data) => (
                <div key={data.id}>
                  <div
                    className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'
                    onClick={() => getIncomeId(data.id)}
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
                  {isModal && (
                    <Modal>
                      <InnerModal />
                    </Modal>
                  )}
                </div>
              ))
            )) : (
            <p className='text-center'>
              <LanguageSwap en='No Income Yet.' th='ไม่มีข้อมูลรายรับ' />
            </p>
          )}
          {!showAll && income.length > 15 && (
            <div className='pt-4'>
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                <LanguageSwap en='Show all' th='แสดงทั้งหมด' /> <span className='text-sm'>({income.length} <LanguageSwap en='rows' th='แถว' />)</span>
              </p>

            </div>
          )}

          {showAll && (
            <div className='pt-4'>
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                <LanguageSwap en='Show less' th='แสดงลดลง' />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )

}

export default IncomeTable