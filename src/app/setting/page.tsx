'use client'

import React, { useState, useEffect } from 'react'

function SettingPage() {
  const [language, setLanguage] = useState('')

  useEffect(() => {
    document.title = "Setting - about2day"
  }, [])

  const LanguageSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>Language</h2>
      <form>
        <ul className='text-lg flex space-x-2'>
          <li>
            <input
              type="radio"
              name="language"
              id="english"
              className='hidden peer'
            />
            <label htmlFor="english" className='btn text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Extra'>
              <span>English</span>
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="language"
              id="thai"
              className='hidden peer'
            />
            <label htmlFor="thai" className='btn text-clr-light cursor-pointer flex justify-center items-center h-fit w-fit bg-clr-secondary bg-clr-gray-3 rounded-lg transition-colors hover:bg-clr-gray-2 peer-checked:bg-clr-primary' title='Extra'>
              <span>Thai</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
  );

  const DataSettingBox = () => (
    <div className='space-y-2'>
      <h2 className='text-2xl font-semibold'>Data</h2>
      <button onClick={() => document.getElementById('my_modal_2').showModal()} className='btn text-clr-light bg-clr-red transition-colors hover:bg-clr-red/90'>Delelete All Data</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">Want to delete all data?</h3>
          <p className="py-4 text-center">If you have done this, It will not be possible to revert your income and expenses data.</p>
          <div className="modal-action">
            <form method="dialog" className='space-x-2'>
              <button onClick={handleDeleteAllSubmit} className="btn text-clr-light bg-clr-primary hover:bg-clr-primary/80">Sure</button>
              <button className="btn text-clr-light bg-clr-red hover:bg-clr-red/80">Cancel</button>
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