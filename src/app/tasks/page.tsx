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
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [objectTaskId, setObjectTaskId] = useState<Task[]>([]);
  const [getTaskId, setGetTaskId] = useState('');
  const [titleObjectTaskId, setTitleObjectTaskId] = useState('')
  const [originalTitle, setOriginalTitle] = useState('');
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

  const toggleDeleteModal = () => {
    toggleTaskModal();
    setIsDeleteModal(!isDeleteModal)
  };

  const methodObjectTaskId = (id: string) => {
    const array = tasks.filter((task) => task.id === id);
    setObjectTaskId(array);
    setTitleObjectTaskId(array[0].title);
    setOriginalTitle(array[0].title);
  }

  const modalTaskId = (id: string) => {
    toggleTaskModal();
    setGetTaskId(id);
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
      return moment(String(date)).format('HH:mm:ss | DD/MM/YYYY')
    }
  }

  const handleDeleteTask = (id: string) => {
    try {
      const taskIndex = tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        const updatedTasks = [...tasks];

        updatedTasks.splice(taskIndex, 1);

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        toggleDeleteModal();
        toggleTaskModal();
      }
    } catch (e) {
      console.error(e);
    }
  }

  const handleEditTask = (id: string, newTitle: string) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      );

      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      toggleTaskModal();
    } catch (e) {
      console.error(e);
    }
  }

  const shouldShowSubmitButton = titleObjectTaskId !== originalTitle;

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

  return (
    <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 auto-rows-[148px]'>
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

          {/* Task Modal */}
          {isTaskModal ? (
            <Modal>
              <div className='space-y-6'>
                <h3 className='text-2xl font-semibold text-center uppercase'>
                  <LanguageSwap
                    en='Edit Details'
                    th='แก้ไขรายละเอียด'
                  />
                </h3>
                <div className='flex flex-col w-full space-y-6'>
                  <ul className='space-y-4 text-lg'>
                    <li>
                      <label className='flex w-full space-x-2'>
                        <span><LanguageSwap en='Title:' th='หัวข้อ:' /></span>
                        <input
                          type="text"
                          name="task"
                          id="title"
                          className='w-full rounded bg-transparent px-2 focus:outline-none border-b border-clr-light'
                          autoComplete='off'
                          placeholder={language === 'en' ? 'example_title' : 'ตัวอย่างหัวข้อ'}
                          value={titleObjectTaskId}
                          onChange={(e) => setTitleObjectTaskId(e.target.value)}
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
                        <span className='w-[5.3rem]'><LanguageSwap en='Created:' th='สร้างเมื่อ:' /></span>
                        <div
                          className='w-full bg-clr-gray-2 px-2 rounded focus:outline-none border-b border-clr-light cursor-not-allowed'
                        >
                          <span className='text-clr-light/80'>{formatDateString(objectTaskId[0])}</span>
                        </div>
                      </label>
                    </li>
                  </ul>
                  <div className='flex justify-between'>
                    <div onClick={toggleDeleteModal} className='btn border-none bg-clr-light transition-colors hover:bg-clr-red text-2xl text-clr-red hover:text-clr-light'>
                      <i className="bi bi-trash translate-y-[2px]"></i>
                    </div>

                    <div className='flex space-x-2'>
                      {shouldShowSubmitButton && (
                        <button
                          onClick={() => handleEditTask(getTaskId, titleObjectTaskId)}
                          className='btn border-none text-clr-light bg-clr-primary transitoin-colors hover:bg-clr-primary/80'
                        >
                          <LanguageSwap en='Sure' th='ยืนยัน' />
                        </button>
                      )}
                      <div
                        className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
                        onClick={toggleTaskModal}
                      >
                        <LanguageSwap en='Cancel' th='ยกเลิก' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          ) : null}

          {/* Delete Modal */}
          {isDeleteModal ? (
            <Modal>
              <div className='flex flex-col space-y-6'>
                <h3 className='text-2xl font-semibold text-center uppercase'>
                  <LanguageSwap
                    en='Want to delete this data?'
                    th='ต้องการลบรายการนี้ใช่หรือไม่ ?'
                  />
                </h3>
                <p className='text-lg text-center'>
                  <LanguageSwap
                    en='If you have done this, It will not be possible to revert your all data.'
                    th='ถ้าหากทำการยืนยัน จะไม่สามารถนำข้อมูลทั้งหมดกลับมาได้'
                  />
                </p>
                <div className='flex justify-end'>
                  <div className='flex space-x-2'>
                    <button
                      onClick={() => handleDeleteTask(getTaskId)}
                      className='btn border-none text-clr-light bg-clr-primary transitoin-colors hover:bg-clr-primary/80'
                    >
                      <LanguageSwap en='Sure' th='ยืนยัน' />
                    </button>
                    <div
                      className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
                      onClick={toggleDeleteModal}
                    >
                      <LanguageSwap en='Cancel' th='ยกเลิก' />
                    </div>
                  </div>
                </div>

              </div>
            </Modal>
          ) : null}
        </div>
      ))}
      <AddTaskButton tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default CustomPage