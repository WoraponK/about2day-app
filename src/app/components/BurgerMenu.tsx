import React, { useContext, useEffect, useState } from 'react'
import { BurgerContext } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import HowBoutDayButton from './buttons/HowBoutDayButton'

interface BurgerValue {
    isBurger: boolean
    setIsBurger: any
}

function BurgerMenu() {
    const pathname = usePathname();
    const { isBurger, setIsBurger } = useContext<BurgerValue>(BurgerContext);
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

    const handleBurger = () => {
        setIsBurger((prevBurger: boolean) => !prevBurger)
    }

    return (
        <>
            {isBurger ? (
                <div className={`fixed right-0 top-0 backdrop-blur-lg bg-clr-primary/60 h-screen opacity-0 w-0 transition-all duration-300 max-md:w-[400px] z-[999] max-md:opacity-100 max-md:flex max-md:flex-col max-sm:w-full`}>
                    <div onClick={handleBurger} className='flex justify-between items-center px-8 py-5 text-3xl max-sm:py-2'>
                        <div className='translate-y-[3px]'>
                            <HowBoutDayButton />
                        </div>
                        <div className='w-[40px] aspect-square flex justify-center items-center bg-clr-light/40 rounded-full transition-colors hover:bg-clr-light/75 cursor-pointer'>
                            <i className="bi bi-x translate-y-[2px]"></i>
                        </div>
                    </div>
                    <ul className='flex flex-col space-y-6 uppercase text-4xl md:hidden px-8 py-8'>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/'}>
                                {pathname == '/' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-house-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'Home'
                                                : 'หน้าหลัก'}
                                        </span>
                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-house"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'Home'
                                                    : 'หน้าหลัก'}
                                            </span>
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/tasks'}>
                                {pathname == '/tasks' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-database-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'Tasks'
                                                : 'รายการ'}
                                        </span>
                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-database"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'Tasks'
                                                    : 'รายการ'}
                                            </span>
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/todos'}>
                                {pathname == '/todos' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-clipboard2-check-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'Todos'
                                                : 'สิ่งที่ต้องทำ'}
                                        </span>
                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-clipboard2-check"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'Todos'
                                                    : 'สิ่งที่ต้องทำ'}
                                            </span>
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/overview'}>
                                {pathname == '/overview' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-calendar3-range-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'Overview'
                                                : 'ภาพรวม'}
                                        </span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-calendar3-range"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'overview'
                                                    : 'ภาพรวม'}
                                            </span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/setting'}>
                                {pathname == '/setting' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-gear-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'Setting'
                                                : 'ตั้งค่า'}
                                        </span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-gear"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'Setting'
                                                    : 'ตั้งค่า'}
                                            </span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2' onClick={handleBurger}>
                            <Link href={'/about'}>
                                {pathname == '/about' ? (
                                    <p className='flex items-center space-x-2'>
                                        <i className="bi bi-info-circle-fill"></i>
                                        <span>
                                            {language === 'en'
                                                ? 'About'
                                                : 'เกี่ยวกับ'}
                                        </span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2'>
                                            <i className="bi bi-info-circle"></i>
                                            <span>
                                                {language === 'en'
                                                    ? 'About'
                                                    : 'เกี่ยวกับ'}
                                            </span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                    </ul>
                    <div className='flex flex-col space-y-6 px-8'>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-3xl text-clr-light/90'>
                                {language === 'en'
                                    ? 'Support me'
                                    : 'สนับสนุน'}
                            </h2>
                            <a href="https://www.buymeacoffee.com/tellytawin" target='_blank' >
                                <button className='py-2 px-4 text-xl rounded bg-clr-yellow transition-all hover:bg-clr-yellow/80 text-clr-dark active:scale-95'><i className="bi bi-cup-hot-fill mr-2"></i>buymeacoffee</button>
                            </a>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-3xl text-clr-light/90'>
                                {language === 'en'
                                    ? 'Social'
                                    : 'โซเชียล'}
                            </h2>
                            <ul className='flex text-5xl space-x-6'>
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
            ) : (null)}
        </>
    )
}

export default BurgerMenu