'use client'

import React, { useEffect, useState } from 'react'

function OverallPage() {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
        document.title = `${l === 'en' ? 'Overall' : 'โดยรวม'} - about2day`
      }
    }
    languageCheck();
  }, [])

  return (
    <div>OverallPage</div>
  )
}

export default OverallPage