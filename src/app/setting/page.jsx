'use client'

import React, { useState, useEffect } from 'react'

function SettingPage() {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
        document.title = `${l === 'en' ? 'Setting': 'ตั้งค่า'} - about2day`
      }
    }

    languageCheck();
  }, [])

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    location.reload();
  }

  const LanguageSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>{language === 'en' ? 'Language' : 'ภาษา'}</h2>
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
            <label htmlFor="english" className='btn text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary'>
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
            <label htmlFor="thai" className='btn text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary'>
              <span>{language === 'en' ? 'Thai' : 'ไทย'}</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
  );

  const DataSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>{language === 'en' ? 'Data' : 'ข้อมูล'}</h2>
      <button onClick={() => document.getElementById('my_modal_2').showModal()} className='btn text-clr-light bg-clr-red transition-colors hover:bg-clr-red/90'>
        {language === 'en'
          ? 'Delelete All Data'
          : 'ล้างข้อมูลทั้งหมด'}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-clr-gray-1/70">
          <h3 className="font-bold text-2xl text-center">
            {language === 'en'
              ? 'Want to delete all data ?'
              : 'ต้องการล้างข้อมูลทั้งหมดใช่หรือไม่ ?'}
          </h3>
          <p className="py-4 text-center">
            {language === 'en'
              ? 'If you have done this, It will not be possible to revert your "income and expenses" data.'
              : 'ถ้าหากทำการยืนยัน จะไม่สามารถนำข้อมูล "รายรับ-รายจ่าย" กลับมาได้'}
          </p>
          <div className="modal-action">
            <form method="dialog" className='space-x-2'>
              <button onClick={handleDeleteAllSubmit} className="btn border-none text-clr-light bg-clr-primary hover:bg-clr-primary/80">
                {language === 'en'
                  ? 'Sure'
                  : 'ยืนยัน'}
              </button>
              <button className="btn border-none text-clr-light bg-clr-red hover:bg-clr-red/80">
                {language === 'en'
                  ? 'Cancel'
                  : 'ยกเลิก'}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );

  const handleDeleteAllSubmit = () => {
    localStorage.removeItem('expenses');
    localStorage.removeItem('income');
  }

  return (
    <>
      <section className='px-64 grid grid-cols-1 space-y-8 max-lg:px-32 max-md:px-8 max-sm:px-0'>
        <LanguageSettingBox />
        <DataSettingBox />
      </section>
    </>
  )
}

export default SettingPage