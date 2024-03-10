'use client'

import React, { useState } from 'react'
import moment from 'moment';

import A2dIcon from '../icons/A2dIcon'

import LanguageSwap from '../LanguageSwap';
import Modal from '../Modal';

import { Finance } from '@/app/types';

function ExpensesTable({ expenses, setExpenses }: { expenses: Finance[], setExpenses: any }) {
  const [showAll, setShowAll] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isDetailsModal, setIsDetailsModal] = useState(false);
  const [getData, setGetData] = useState<Finance[]>([]);
  const [getOnlyId, setGetOnlyId] = useState('');

  const toggleDetailsModal = () => {
    setIsDetailsModal(!isDetailsModal);
  }

  const toggleDeleteModal = () => {
    try {
      toggleDetailsModal();
      setIsDeleteModal(!isDeleteModal)
    } catch (e) {
      console.error(e);
    }
  }

  const handleShowAllClick = () => {
    setShowAll(!showAll)
  }

  const totalAmount = expenses.reduce((acc, item) => acc + item.amount, 0)

  const formatDate = (value: string) => {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
  }

  const formatFullDate = (value: string) => {
    if (value) {
      return moment(String(value)).format('HH:mm:ss | DD/MM/YYYY')
    }
  }

  const convertTypeToName = (type: any) => {
    switch (type) {
      case 'ex-foods':
        return <LanguageSwap en='Foods' th='อาหาร' />
      case 'ex-gaming':
        return <LanguageSwap en='Gaming' th='เกม' />
      case 'ex-shopping':
        return <LanguageSwap en='Shopping' th='ช็อปปิ้ง' />
      case 'ex-tools':
        return <LanguageSwap en='Tools' th='เครื่องมือ' />
      case 'ex-house':
        return <LanguageSwap en='House' th='บ้าน' />
      case 'ex-phone':
        return <LanguageSwap en='Phone' th='มือถือ' />
      case 'expenses':
        return <LanguageSwap en='Expenses' th='รายจ่าย' />
      default:
        return <LanguageSwap en='Null' th='ว่าง' />
    }
  }

  const getObjectData = (id: string) => {
    toggleDetailsModal();
    setGetOnlyId(id);
    const array = expenses.filter((data) => data.id === id)
    setGetData(array);
  }

  const handleDelete = (id: string) => {
    try {
      toggleDetailsModal();
      const expensesIndex = expenses.findIndex((inc) => inc.id === id);

      if (expensesIndex !== -1) {
        const updatedExpenses = [...expenses];

        updatedExpenses.splice(expensesIndex, 1);

        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

        toggleDeleteModal();
        setIsDetailsModal(false)
      }
    } catch (e) {
      console.error(e);
    }
  }

  const InnerDetailsModal = ({ data }: { data: Finance[] }) => (
    <div className='space-y-4'>
      <h3 className='text-2xl font-semibold text-center uppercase'>
        <LanguageSwap
          en='DETAILS'
          th='รายละเอียด'
        />
      </h3>
      <ul className='space-y-4 text-lg'>
        <li>
          <label className='flex w-full space-x-2'>
            <span><LanguageSwap en='Model:' th='ประเภท:' /></span>
            <div
              className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
            >
              <span className='text-clr-light/80'>{convertTypeToName(data[0].model)}</span>
            </div>
          </label>
        </li>
        <li>
          <label className='flex w-full space-x-2'>
            <span><LanguageSwap en='Type:' th='ชนิด:' /></span>
            <div
              className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
            >
              <span className='text-clr-light/80'>{convertTypeToName(data[0].type)}</span>
            </div>
          </label>
        </li>
        <li>
          <label className='flex w-full space-x-2'>
            <span><LanguageSwap en='Amount:' th='จำนวน:' /></span>
            <div
              className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
            >
              <span className='text-clr-light/80'>{data[0].amount} ฿</span>
            </div>
          </label>
        </li>
        <li>
          <label className='flex w-full space-x-2'>
            <span className='w-[5.3rem]'><LanguageSwap en='Created:' th='สร้างเมื่อ:' /></span>
            <div
              className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
            >
              <span className='text-clr-light/80'>{formatFullDate(data[0].date)}</span>
            </div>
          </label>
        </li>
      </ul>

      <div className='flex justify-between space-x-2'>
        <div onClick={toggleDeleteModal} className='btn border-none bg-clr-light transition-colors hover:bg-clr-red text-2xl text-clr-red hover:text-clr-light'>
          <i className="bi bi-trash translate-y-[2px]"></i>
        </div>
        <div
          className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
          onClick={toggleDetailsModal}
        >
          <LanguageSwap en='Cancel' th='ยกเลิก' />
        </div>
      </div>
    </div>
  );

  const InnerDeleteModal = () => (
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
          onClick={() => handleDelete(getOnlyId)}
        >
          <LanguageSwap en='Sure' th='ยืนยัน' />
        </button>
        <button
          className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
          onClick={toggleDeleteModal}
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
          <LanguageSwap en='Expenses' th='รายจ่าย' />
        </div>
        <h2 className='font-semibold text-xl text-clr-secondary-2'><span className='text-sm uppercase'><LanguageSwap en='Total' th='รวม' />
        </span> {totalAmount.toFixed(2)}฿</h2>
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
            <LanguageSwap en='Amount' th='จำนวน' />
          </h2>
        </div>
        <div className='pt-2 space-y-0'>
          {expenses?.length > 0 ? (
            showAll ? (
              expenses?.map((data) => (
                <div key={data.id}>
                  <div
                    className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'
                    onClick={() => getObjectData(data.id)}
                  >
                    <div className='absolute flex justify-center items-center w-full h-full opacity-0 transition-all group-hover:opacity-100'>
                      <div className='h-full w-0 border-l-2 border-r-2 border-clr-secondary-1 transition-all duration-500 group-hover:w-full relative flex justify-center items-center'>
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
                </div>
              ))
            ) : (
              expenses?.slice(0, 15).map((data) => (
                <div key={data.id}>
                  <div
                    className=' space-y-1 group hover:bg-clr-gray-1 rounded cursor-pointer hover:text-clr relative'
                    onClick={() => getObjectData(data.id)}
                  >
                    <div className='absolute flex justify-center items-center w-full h-full opacity-0 transition-all group-hover:opacity-100'>
                      <div className='h-full w-0 border-l-2 border-r-2 border-clr-secondary-1 transition-all duration-500 group-hover:w-full relative flex justify-center items-center'>
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
                </div>
              ))
            )) : (
            <p className='text-center'>
              <LanguageSwap en='No Expenses Yet.' th='ไม่มีข้อมูลรายจ่าย' />
            </p>
          )}

          {!showAll && expenses.length > 15 && (
            <div className='pt-4'>
              <p
                className='text-clr-secondary-1 text-center cursor-pointer transition-colors hover:text-clr-secondary-2'
                onClick={handleShowAllClick}
              >
                <LanguageSwap en='Show all' th='แสดงทั้งหมด' /> <span className='text-sm'>({expenses.length} <LanguageSwap en='rows' th='แถว' />)</span>
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
      {
        isDetailsModal && (
          <Modal>
            <InnerDetailsModal data={getData} />
          </Modal>
        )
      }

      {
        isDeleteModal && (
          <Modal>
            <InnerDeleteModal />
          </Modal>
        )
      }
    </div>

  )
}

export default ExpensesTable