'use client'

import React, { use, useEffect, useState } from 'react'
import moment from 'moment'

// Components
import AddTaskButton from './AddTaskButton'
import Modal from '../components/Modal'
import LanguageSwap from '../components/LanguageSwap'

import { Task, Data } from '../types'

function CustomPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isTaskModal, setIsTaskModal] = useState(false);
  const [objectTaskId, setObjectTaskId] = useState<Task[]>([]);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
        document.title = `${l === 'en' ? 'Customize' : 'จัดการ'} - about2day`;
      }
    }

    const fetchTasks = () => {
      const existingTasks = localStorage.getItem('tasks');
      setTasks(existingTasks ? JSON.parse(existingTasks) : []);
    }

    languageCheck();
    fetchTasks();
  }, [])

  const toggleTaskModal = () => setIsTaskModal(!isTaskModal);

  const methodObjectTaskId = (id: string) => {
    const array = tasks.filter((task) => task.id === id);
    setObjectTaskId(array)
  }

  const modalTaskId = (id: string) => {
    toggleTaskModal();
    methodObjectTaskId(id)
  }

  const convertTypeString = (task: Task) => {
    const type = task.type;
    switch (type) {
      case 'level':
        return <LanguageSwap en='Level' th='ลำดับ' />
      case 'amount':
        return <LanguageSwap en='Amount' th='จำนวน' />
      default:
        return 'null'
    }
  }

  const formatDateString = (task: Task) => {
    const date = task.date;
    if (date) {
      return moment(String(date)).format('DD/MM/YYYY')
    }
  }

  const AmountInnerTask = ({ task }: { task: Task }) => (
    <div>
      AmountInnerTask {task.id}
    </div>
  );

  const LevelInnerTask = ({ task }: { task: Task }) => (
    <div>
      LevelInnerTask {task.id}
    </div>
  );

  const AllTasks = () => (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className='h-full flex flex-col'
        >
          <div className='w-full flex justify-between items-center space-x-8 h-fit'>
            <div className='bg-clr-primary w-fit h-full py-1 px-4 line-clamp-1 rounded-t-xl'>
              <p className='line-clamp-1 text-lg font-semibold'>
                {task.title}
              </p>
            </div>
            <div onClick={() => modalTaskId(task.id)} className='bg-clr-gray-3 h-[30px] aspect-square flex justify-center items-center rounded-full cursor-pointer transition-all active:scale-95 hover:bg-clr-gray-2'>
              <i className="bi bi-pencil"></i>
            </div>
          </div>
          <div className='bg-clr-accent h-full rounded-r-xl rounded-bl-xl p-2'>
            {task.type == 'amount' ? (
              <>
                <AmountInnerTask task={task} />
              </>
            ) : task.type == 'level' ? (
              <>
                <LevelInnerTask task={task} />
              </>
            ) : null}
          </div>
          {isTaskModal && (
            <Modal>
              <div className='space-y-6'>
                <h3 className='text-2xl font-semibold text-center uppercase'>
                  <LanguageSwap
                    en='Edit Details'
                    th='แก้ไขรายละเอียด'
                  />
                </h3>
                <form className='flex flex-col w-full'>
                  <ul className='space-y-4 text-lg'>
                    <li>
                      <label className='flex w-full space-x-2'>
                        <span><LanguageSwap en='Title:' th='หัวข้อ:' /></span>
                        <input
                          type="text"
                          name="task"
                          id="title"
                          className='w-full bg-transparent px-2 focus:outline-none border-b border-clr-light'
                          autoComplete='off'
                          placeholder={language === 'en' ? 'example_title': 'ตัวอย่างหัวข้อ'}
                          value={objectTaskId[0].title}
                        />
                      </label>
                    </li>
                    <li>
                      <label className='flex w-full space-x-2'>
                        <span><LanguageSwap en='Type:' th='ประเภท:' /></span>
                        <div
                          className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
                        >
                          <span className='text-clr-light/80'>{convertTypeString(objectTaskId[0])}</span>
                        </div>
                      </label>
                    </li>
                    <li>
                      <label className='flex w-full space-x-2'>
                        <span><LanguageSwap en='Date:' th='เวลา:' /></span>
                        <div
                          className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
                        >
                          <span className='text-clr-light/80'>{formatDateString(objectTaskId[0])}</span>
                        </div>
                      </label>
                    </li>
                  </ul>
                </form>
                <div className='flex justify-end space-x-2'>
                  <button
                    className='btn border-none text-clr-light bg-clr-primary transitoin-colors hover:bg-clr-primary/80'
                  >
                    <LanguageSwap en='Sure' th='ยืนยัน' />
                  </button>
                  <div
                    className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
                    onClick={toggleTaskModal}
                  >
                    <LanguageSwap en='Cancel' th='ยกเลิก' />
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 auto-rows-[148px]'>
      <AllTasks />
      <AddTaskButton tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default CustomPage