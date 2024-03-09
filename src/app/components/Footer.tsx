'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LanguageSwap from './LanguageSwap'

function Footer() {
    const [language, setLanguage] = useState('');

    useEffect(() => {
        const languageCheck = () => {
            const l = localStorage.getItem('language');
            if (l) {
                setLanguage(l);
            }
        }

        languageCheck();
    }, [])

    return (
        <footer className='p-16 grid grid-cols-2 border-t border-clr-light/90 max-md:grid-cols-1 max-md:gap-16 max-md:px-8'>
            <div className='space-y-4 flex flex-col max-md:items-center'>
                <div className='h-[150px] w-[78px] relative'>
                    <Image
                        fill
                        src={'/images/symbol-nobg.png'}
                        alt='logo'
                        objectFit='contain'
                    />
                </div>
                <div className='max-md:text-center'>
                    <h2 className='text-3xl'>about2day</h2>
                    <p className='text-xl'>Copyright © 2024</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-2xl text-clr-light/90'>
                        <LanguageSwap en='Navigators' th='ช่วยเหลือ' />
                    </h2>
                    <ul className='flex flex-col space-y-2 text-xl uppercase ml-2'>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/'}>
                                <LanguageSwap en='Home' th='หน้าหลัก' />
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/tasks'}>
                                <LanguageSwap en='Tasks' th='รายการ' />
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/todos'}>
                                <LanguageSwap en='Todos' th='สิ่งที่ต้องทำ' />
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/overview'}>
                                <LanguageSwap en='Overview' th='ภาพรวม' />

                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/setting'}>
                                <LanguageSwap en='Setting' th='ตั้งค่า' />
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-primary'>
                            <Link href={'/about'}>
                                <LanguageSwap en='About' th='เกี่ยวกับ' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-2xl text-clr-light/90'>
                            <LanguageSwap en='Support me' th='สนับสนุน' />
                        </h2>
                        <a href="https://www.buymeacoffee.com/tellytawin" target='_blank'>
                            <button className='py-2 px-4 text-xl rounded bg-clr-yellow transition-all hover:bg-clr-yellow/80 text-clr-dark active:scale-95'><i className="bi bi-cup-hot-fill mr-2"></i>buymeacoffee</button>
                        </a>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-2xl text-clr-light/90'>
                            <LanguageSwap en='Social' th='โซเขียล' />
                        </h2>
                        <ul className='flex text-3xl space-x-4'>
                            <li >
                                <a
                                    className='transition-colors hover:text-clr-primary h-fit' href="https://www.facebook.com/ggtellytawin/"
                                    target='_blank'
                                    aria-label='Facebook: Tell'
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li >
                                <a
                                    className='transition-colors hover:text-clr-primary h-fit' href="https://www.instagram.com/telly_tawin/"
                                    target='_blank'
                                    aria-label='Instagram: telly_tawin'
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li >
                                <a
                                    className='transition-colors hover:text-clr-primary h-fit' href="https://github.com/WoraponK" target='_blank'
                                    aria-label='GitHub: WoraponK'
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                            </li>
                            <li >
                                <a
                                    className='transition-colors hover:text-clr-primary h-fit' href="https://www.youtube.com/@WoraponKS"
                                    target='_blank'
                                    aria-label='Youtube: WoraponK'
                                >
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer