'use client'

import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal';
import LanguageSwap from '../components/LanguageSwap';

import { BoutDay } from '../types';

function SettingPage() {
  const [language, setLanguage] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [setHour, setSetHour] = useState(0);
  const [setMinute, setSetMinute] = useState(0);
  const [originalHour, setOriginalHour] = useState(0);
  const [originalMinute, setOriginalMinute] = useState(0);
  const [isTimeChanged, setIsTimeChanged] = useState(false);

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
        document.title = `${l === 'en' ? 'Setting' : 'ตั้งค่า'} - about2day`
      }
    }

    const pullTimeLocalStorage = () => {
      const time = localStorage.getItem('settime');
      if (time) {
        const parseTime = JSON.parse(time);

        setSetHour(parseTime.hour);
        setSetMinute(parseTime.minute);

        setOriginalHour(parseTime.hour);
        setOriginalMinute(parseTime.minute);
      }
    }

    languageCheck();
    pullTimeLocalStorage();
  }, [])

  const handleLanguageChange = (e: any) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    location.reload();
  }

  const handleModalDeleteAll = () => {
    setIsModal((prev: boolean) => !prev)
  }

  const handleDecreaseHour = () => {
    if (setHour > 0) {
      setSetHour(setHour - 1)
    }
  }

  const handleDecreaseMinute = () => {
    if (setMinute > 0) {
      setSetMinute(setMinute - 1)
    }
  }

  const handleIncreaseHour = () => {
    if (setHour >= 0 && setHour < 23) {
      setSetHour(setHour + 1)
    }
  }

  const handleIncreaseMinute = () => {
    if (setMinute >= 0 && setMinute < 59) {
      setSetMinute(setMinute + 1)
    }
  }

  const handleSubmitTimeChanged = () => {
    const time = localStorage.getItem('settime');

    const updatedTime: BoutDay = {
      hour: setHour,
      minute: setMinute
    }

    if (time) {
      localStorage.setItem('settime', JSON.stringify(updatedTime));
      location.reload();
    }
  }

  const checkTimeChanged = setHour !== originalHour || setMinute !== originalMinute

  const LanguageSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>
        <i className="bi bi-globe-americas mr-2"></i>
        {language === 'en' ? 'Languages' : 'ภาษา'}
      </h2>
      <form>
        <ul className='text-lg flex space-x-2'>
          <li>
            <input
              type="radio"
              name="language"
              id="english"
              className='hidden peer'
              value={'en'}
              checked={language === 'en'}
              onChange={handleLanguageChange}
            />
            <label htmlFor="english" className='btn border-none text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary'>
              <span>{language === 'en' ? 'English' : 'อังกฤษ'}</span>
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="language"
              id="thai"
              className='hidden peer'
              value={'th'}
              checked={language === 'th'}
              onChange={handleLanguageChange}
            />
            <label htmlFor="thai" className='btn border-none text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary'>
              <span>{language === 'en' ? 'Thai' : 'ไทย'}</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
  );

  const InnerModal = () => (
    <div className='space-y-4'>
      <h3 className='text-2xl font-semibold text-center uppercase'>
        <LanguageSwap
          en='Want to delete all data?'
          th='ต้องการล้างข้อมูลทั้งหมดใช่หรือไม่ ?'
        />
      </h3>
      <p className='text-lg text-center'>
        <LanguageSwap
          en='If you have done this, It will not be possible to revert your all data.'
          th='ถ้าหากทำการยืนยัน จะไม่สามารถนำข้อมูลทั้งหมดกลับมาได้'
        />
      </p>
      <div className='flex justify-end space-x-2'>
        <button
          className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
          onClick={handleModalDeleteAll}
        >
          <LanguageSwap en='Cancel' th='ยกเลิก' />
        </button>
        <button
          className='btn border-none text-clr-light bg-clr-primary transition-colors hover:bg-clr-primary/80'
          onClick={handleDeleteAllSubmit}
        >
          <LanguageSwap en='Sure' th='ยืนยัน' />
        </button>
      </div>
    </div>
  );

  const DeleteAllButton = () => (
    <>
      <button
        onClick={handleModalDeleteAll}
        className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/90'
      >
        {language === 'en'
          ? 'Delelete All Data'
          : 'ล้างข้อมูลทั้งหมด'}
      </button>
      {isModal && (
        <Modal>
          <InnerModal />
        </Modal>
      )}
    </>
  );

  const DataSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>
        <i className="bi bi-database mr-2"></i>
        {language === 'en' ? 'Data' : 'ข้อมูล'}
      </h2>
      <DeleteAllButton />
    </div>
  );

  const TimeSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>
        <i className="bi bi-clock mr-2"></i>
        {language === 'en' ? 'BoutDay? Time Setting' : 'ตั้งเวลา วันนี้เป็นไง ?'}
      </h2>
      <div className='flex items-end'>

        {/* Hour */}
        <div className='bg-clr-gray-2 rounded-bl-xl flex flex-col group'>
          <button
            onClick={handleIncreaseHour}
            className='text-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-clr-gray-1/50 max-lg:opacity-100'
          >
            <i className="bi bi-chevron-compact-up"></i>
          </button>
          <span className='text-4xl px-8 py-2 cursor-default'>{setHour.toString().padStart(2, '0')}</span>
          <button
            onClick={handleDecreaseHour}
            className='text-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-clr-gray-1/50 max-lg:opacity-100'
          >
            <i className="bi bi-chevron-compact-down"></i>
          </button>
        </div>

        {/* Minute */}
        <div className='bg-clr-gray-3 rounded-br-xl flex flex-col group'>
          <button
            onClick={handleIncreaseMinute}
            className='text-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-clr-gray-1/50 max-lg:opacity-100'
          >
            <i className="bi bi-chevron-compact-up"></i>
          </button>
          <span className='text-4xl px-8 py-2 cursor-default'>{setMinute.toString().padStart(2, '0')}</span>
          <button
            onClick={handleDecreaseMinute}
            className='text-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-clr-gray-1/50 max-lg:opacity-100'
          >
            <i className="bi bi-chevron-compact-down"></i>
          </button>
        </div>
        {checkTimeChanged && (
          <button
            onClick={handleSubmitTimeChanged}
            className='btn bg-clr-primary text-clr-light hover:bg-clr-primary/60 ml-4'
          >
            <LanguageSwap en='Submit' th='ยืนยัน' />
          </button>
        )}
      </div>
    </div>
  );

  const handleDeleteAllSubmit = () => {
    localStorage.removeItem('expenses');
    localStorage.removeItem('income');
    localStorage.removeItem('finance');
    localStorage.removeItem('tasks');
    handleModalDeleteAll();
  }

  return (
    <>
      <section className='px-32 grid grid-cols-1 space-y-16 max-lg:px-32 max-md:px-8 max-sm:px-0'>
        <TimeSettingBox />
        <LanguageSettingBox />
        <DataSettingBox />
      </section>
    </>
  )
}

export default SettingPage