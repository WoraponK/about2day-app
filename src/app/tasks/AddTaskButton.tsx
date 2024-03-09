'use client'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

import MoodIcon from '../components/icons/MoodIcon'
import Modal from '../components/Modal'
import LanguageSwap from '../components/LanguageSwap';
import { Task } from '../types';

function AddTaskButton({tasks, setTasks}: {tasks:Task[], setTasks:any}) {
    const [isModal, setIsModal] = useState(false);
    const [language, setLanguage] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [selected, setSelected] = useState('');

    useEffect(() => {
        const languageCheck = () => {
            const l = localStorage.getItem('language');
            if (l) {
                setLanguage(l);
            }
        }

        languageCheck();
    }, []);

    const toggleModal = () => {
        setSelected('');
        setTaskTitle('')
        setIsModal(!isModal);
    }

    const handleSubmit = (e: any) => {
        try {
            e.preventDefault();

            const newTask: Task = {
                id: uuidv4(),
                title: taskTitle,
                type: selected,
                date: new Date().toISOString(),
                data: []
            }

            if (selected && taskTitle.length > 0) {
               const existingTasks = localStorage.getItem('tasks'); 
               const parseExistingTasks = existingTasks ? JSON.parse(existingTasks) : [];

               const updatedTasks = [newTask, ...parseExistingTasks];

               setTasks(updatedTasks)

               localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            } else {
                console.error('Please select task type and enter a valid taks title.');
            }

            setTaskTitle('');
            setSelected('');
            toggleModal();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <button onClick={toggleModal} className='transition-all active:scale-95 bg-clr-primary uppercase h-26 text-lg rounded-xl group cursor-pointer hover:bg-clr-primary/60 flex justify-center space-x-4 items-center space-y-2 font-semibold'>
                <div>
                    <div className='block group-hover:hidden'>
                        <MoodIcon level={4} size={35} />
                    </div>
                    <div className='hidden group-hover:block group-hover:animate-bounce'>
                        <MoodIcon level={5} size={35} />
                    </div>
                </div>
                <div>
                    <span className='block'>+ <LanguageSwap en='Add New Task' th='เพิ่มรายการใหม่' /></span>
                </div>
            </button>
            {isModal && (
                <Modal>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold text-center uppercase'>
                            <LanguageSwap
                                en='Choose type'
                                th='เลือกประเภทรายการ'
                            />
                        </h3>
                        <form onSubmit={handleSubmit} className='space-y-4 grid grid-cols-1'>
                            <label className='w-3/4 justify-self-center flex border-b-2 border-clr-light  pb-1'>
                                <input
                                    type="text"
                                    className='bg-transparent focus:outline-none w-full pr-1'
                                    placeholder={language === 'en' ? 'Task Title' : 'หัวข้อ'}
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    autoComplete='off'
                                    required
                                />
                                <i className="bi bi-pencil"></i>
                            </label>
                            <ul className='flex justify-center space-x-4'>
                                <li className='flex justify-center items-center flex-col'>
                                    <input
                                        type="radio"
                                        name="today-type"
                                        id="amount"
                                        className='hidden peer'
                                        value={'amount'}
                                        onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label
                                        htmlFor="amount"
                                        className='cursor-pointer bg-clr-gray-3 transition-all hover:bg-clr-gray-2 active:scale-95 peer-checked:bg-clr-orange flex justify-center items-center h-12 aspect-square rounded-xl'
                                    >
                                        <p className='text-2xl'>+1</p>
                                    </label>
                                    <p className='text-center'><LanguageSwap en='Amount' th='จำนวน' /></p>
                                </li>
                                <li className='flex justify-center items-center flex-col'>
                                    <input
                                        type="radio"
                                        name="today-type"
                                        id="level"
                                        className='hidden peer'
                                        value={'level'}
                                        onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label
                                        htmlFor="level"
                                        className='cursor-pointer bg-clr-gray-3 transition-all hover:bg-clr-gray-2 active:scale-95 peer-checked:bg-clr-red flex justify-center items-center h-12 aspect-square rounded-xl'
                                    >
                                        <MoodIcon size={30} level={5} />
                                    </label>
                                    <p className='text-center'><LanguageSwap en='Level' th='ระดับ' /></p>
                                </li>
                            </ul>
                            <div className='flex justify-end space-x-2'>
                                <button
                                    className='btn border-none text-clr-light bg-clr-primary transitoin-colors hover:bg-clr-primary/80'
                                >
                                    <LanguageSwap en='Sure' th='ยืนยัน' />
                                </button>
                                <div
                                    className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
                                    onClick={toggleModal}
                                >
                                    <LanguageSwap en='Cancel' th='ยกเลิก' />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default AddTaskButton