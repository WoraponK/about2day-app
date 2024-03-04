'use client'

import React, { useEffect, useState } from 'react'

function AboutPage() {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
      }
    }
    languageCheck();
    document.title = `${language === 'en' ? 'About' : 'เกี่ยวกับ'} - about2day`
  }, [])

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage