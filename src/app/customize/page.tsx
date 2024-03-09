'use client'

import React, { useEffect, useState } from 'react'

// Components
import AddCustomizeButton from './AddCustomizeButton'

function CustomPage() {

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Customize' : 'จัดการ'} - about2day`
      }
    }
    languageCheck();

  }, [])

  return (
    <div>
      <AddCustomizeButton />
    </div>
  )
}

export default CustomPage