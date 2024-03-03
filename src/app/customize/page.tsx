'use client'

import React, { useEffect } from 'react'

function CustomPage() {
  useEffect(() => {
    document.title = "Customize - about2day"
  }, [])

  return (
    <div>CustomPage</div>
  )
}

export default CustomPage