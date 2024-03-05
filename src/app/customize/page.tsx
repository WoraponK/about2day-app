'use client'

import React, { useEffect, useState } from 'react'

function CustomPage() {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
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