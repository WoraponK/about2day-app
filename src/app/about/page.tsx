'use client'

import React, { useEffect, useState } from 'react'

function AboutPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  useEffect(() => {
    document.title = `${language === 'en' ? 'About' : 'เกี่ยวกับ'} - about2day`
  }, [])

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage