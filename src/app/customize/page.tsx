'use client'

import React, { useEffect, useState } from 'react'

function CustomPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  useEffect(() => {
    document.title = `${language === 'en' ? 'Customize': 'สร้างเอง'} - about2day`

  }, [])

  return (
    <div>CustomPage</div>
  )
}

export default CustomPage