'use client'

import React from 'react'
import { useEffect } from 'react'

function SettingPage() {
    useEffect(() => {
        document.title = "Setting - about2day"
      }, [])

  return (
    <div>SettingPage</div>
  )
}

export default SettingPage