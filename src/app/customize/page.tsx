'use client'

import React, { useEffect, useState } from 'react'

function CustomPage() {

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Customize' : 'ของฉัน'} - about2day`
      }
    }
    languageCheck();

  }, [])

  return (
    <div>CustomPage</div>
  )
}

export default CustomPage