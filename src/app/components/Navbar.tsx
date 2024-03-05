'use client'

import React, { useEffect, useState, createContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import HowBoutDayButton from './buttons/HowBoutDayButton';
import BurgerMenu from "./BurgerMenu";

interface BurgerType {
    isBurger: boolean,
    setIsBurger: any
}

export const BurgerContext = createContext<BurgerType>({
    isBurger: false,
    setIsBurger: () => { },
});;

function Navbar() {
    const pathname = usePathname();
    const [isNavHidden, setIsNavHidden] = useState(false);
    const [isBurger, setIsBurger] = useState(false);
    const [language, setLanguage] = useState('');


    useEffect(() => {
        const scroll = () => {
            const prevScorllPos = window.scrollY;

            const handleScroll = () => {
                const currentScrollPos = window.scrollY;
                setIsNavHidden(currentScrollPos > prevScorllPos);
                window.scrollY = prevScorllPos;
            };

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }

        const languageCheck = () => {
            const l = localStorage.getItem('language');
            if (l) {
                setLanguage(l);
            }
        }

        languageCheck();
        scroll();
    }, [])

    const handleBurger = () => {
        setIsBurger((prevBurger) => !prevBurger)
    }

    return (
        <>
            <nav className={`flex justify-between items-center px-16 py-6 border-b border-clr-light/90 max-lg:px-8 max-sm:py-4 backdrop-blur-md z-50 sticky top-0 left-0 w-full transition duration-300 ease-in-out ${isNavHidden ? 'hidden' : ''}`}>
                <Link href={'/'}>
                    <div className='relative max-lg:w-[120px] w-[150px] h-[50px]'>
                        <Image
                            fill
                            objectFit='contain'
                            src={'/images/logo-infog-nobg-dark.png'}
                            alt='logo'
                            priority={false}
                        />
                    </div>
                </Link>
                <ul className='flex items-center space-x-6 uppercase text-2xl max-md:hidden'>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/'}>
                            {pathname == '/' ? (
                                <p
                                    className='flex items-center space-x-2'
                                    title={language === 'en'
                                        ? 'Home'
                                        : 'หน้าหลัก'}
                                >
                                    <i className="bi bi-house-fill"></i>
                                </p>
                            )
                                : (
                                    <p className='flex items-center space-x-2' title={language === 'en'
                                        ? 'Home'
                                        : 'หน้าหลัก'}>
                                        <i className="bi bi-house"></i>
                                    </p>
                                )
                            }
                        </Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/customize'}>
                            {pathname == '/customize' ? (
                                <p className='flex items-center space-x-2' title={language === 'en'
                                    ? 'Customize'
                                    : 'ของฉัน'}>
                                    <i className="bi bi-database-fill"></i>
                                </p>
                            )
                                : (
                                    <p className='flex items-center space-x-2' title={language === 'en'
                                        ? 'Customize'
                                        : 'ของฉัน'}>
                                        <i className="bi bi-database"></i>
                                    </p>
                                )
                            }
                        </Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/overview'}>
                            {pathname == '/overview' ? (
                                <p className='flex items-center space-x-2' title={language === 'en'
                                    ? 'Overview'
                                    : 'ภาพรวม'}>
                                    <i className="bi bi-calendar3-range-fill"></i>

                                </p>
                            )
                                : (
                                    <p className='flex items-center space-x-2' title={language === 'en'
                                        ? 'Overview'
                                        : 'ภาพรวม'}>
                                        <i className="bi bi-calendar3-range"></i>
                                    </p>
                                )
                            }
                        </Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/setting'}>
                            {pathname == '/setting' ? (
                                <p className='flex items-center space-x-2' title={language === 'en'
                                    ? 'Setting'
                                    : 'ตั้งค่า'}>
                                    <i className="bi bi-gear-fill"></i>
                                </p>
                            )
                                : (
                                    <p className='flex items-center space-x-2' title={language === 'en'
                                        ? 'Setting'
                                        : 'ตั้งค่า'}>
                                        <i className="bi bi-gear"></i>
                                    </p>
                                )
                            }
                        </Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/about'}>
                            {pathname == '/about' ? (
                                <p className='flex items-center space-x-2' title={language === 'en'
                                    ? 'About'
                                    : 'เกี่ยวกับ'}>
                                    <i className="bi bi-info-circle-fill"></i>

                                </p>
                            )
                                : (
                                    <p className='flex items-center space-x-2' title={language === 'en'
                                        ? 'About'
                                        : 'เกี่ยวกับ'}>
                                        <i className="bi bi-info-circle"></i>
                                    </p>
                                )
                            }
                        </Link>
                    </li>
                </ul>
                <div className='flex justify-center items-center space-x-4'>
                    <HowBoutDayButton />
                    <div onClick={handleBurger} className='text-3xl hidden cursor-pointer bg-clr-primary/60 rounded-full w-[40px] aspect-square max-md:flex justify-center items-center transition-colors hover:bg-clr-primary'>
                        <i className="bi bi-list translate-y-px"></i>
                    </div>
                </div>
            </nav>
            {isBurger ? <BurgerMenu /> : (null)}
            <BurgerContext.Provider value={{ isBurger, setIsBurger }}>
                <BurgerMenu />
            </BurgerContext.Provider>
        </>
    )
}

export default Navbar