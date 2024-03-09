'use client'

import React, { useEffect, useState } from 'react'

// Components
import AddTaskButton from './AddTaskButton'

import { Task, Data } from '../types'

function CustomPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Customize' : 'จัดการ'} - about2day`
      }
    }
    languageCheck();

  }, [])

  return (
    <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
      <AddTaskButton tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default CustomPage