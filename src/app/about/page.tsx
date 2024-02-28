'use client'

import React from 'react'
import { useEffect } from 'react'

function AboutPage() {
    useEffect(() => {
        document.title = "About - about2day"
      }, [])

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage