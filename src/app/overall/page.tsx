'use client'

import React, { useEffect } from 'react'

function OverallPage() {
    useEffect(() => {
        document.title = "Overall - about2day"
      }, [])

  return (
    <div>OverallPage</div>
  )
}

export default OverallPage