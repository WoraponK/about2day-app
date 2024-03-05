'use client'

import React, { useEffect, useState } from 'react'

function OverviewPage() {

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Overview' : 'ภาพรวม'} - about2day`
      }
    }
    languageCheck();
  }, [])

  return (
    <div>OverviewPage</div>
  )
}

export default OverviewPage