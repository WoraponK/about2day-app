'use client'

import React, { useEffect, useState } from 'react'

function OverallPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  useEffect(() => {
    document.title = `${language === 'en' ? 'Overall': 'โดยรวม'} - about2day`
  }, [])

  return (
    <div>OverallPage</div>
  )
}

export default OverallPage