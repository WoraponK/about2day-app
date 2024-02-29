'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import MoodIcon from './icons/MoodIcon'

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className='flex justify-between items-center px-16 py-6 border-b border-clr-light/90 max-lg:px-8 max-sm:py-4 sticky top-0 backdrop-blur-xl z-50'>
            <Link href={'/'}>
                <div className='relative max-lg:w-[120px] w-[150px] h-[50px]'>
                    <Image
                        fill
                        objectFit='contain'
                        src={'/images/logo-infog-nobg-dark.png'}
                        alt='logo'
                    />
                </div>
            </Link>
            <ul className='flex items-center space-x-6 uppercase text-2xl max-md:hidden'>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/'}>
                        {pathname == '/' ? (
                            <p className='flex items-center space-x-2'>
                                <i className="bi bi-house-fill"></i>
                                <span className='text-lg max-lg:hidden'>
                                    Home
                                </span>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2'>
                                    <i className="bi bi-house"></i>
                                    <span className='text-lg max-lg:hidden'>
                                        Home
                                    </span>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/overall'}>
                        {pathname == '/overall' ? (
                            <p className='flex items-center space-x-2'>
                                <i className="bi bi-calendar3-range-fill"></i>
                                <span className='text-lg max-lg:hidden'>
                                    Overall
                                </span>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2'>
                                    <i className="bi bi-calendar3-range"></i>
                                    <span className='text-lg max-lg:hidden'>
                                        Overall
                                    </span>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/setting'}>
                        {pathname == '/setting' ? (
                            <p className='flex items-center space-x-2'>
                                <i className="bi bi-gear-fill"></i>
                                <span className='text-lg max-lg:hidden'>
                                    Setting
                                </span>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2'>
                                    <i className="bi bi-gear"></i>
                                    <span className='text-lg max-lg:hidden'>
                                        Setting
                                    </span>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/about'}>
                        {pathname == '/about' ? (
                            <p className='flex items-center space-x-2'>
                                <i className="bi bi-info-circle-fill"></i>
                                <span className='text-lg max-lg:hidden'>
                                    About
                                </span>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2'>
                                    <i className="bi bi-info-circle"></i>
                                    <span className='text-lg max-lg:hidden'>
                                        About
                                    </span>
                                </p>
                            )
                        }
                    </Link>
                </li>
            </ul>
            <button className='bg-clr-secondary-1 py-2 px-4 max-sm:p-3 text-lg rounded-full flex items-center  gap-1 transition-colors hover:bg-clr-secondary-2'>
                <MoodIcon level={5} size={25} />
                <span className='max-sm:hidden'>How bout day?</span>
            </button>
        </nav>
    )
}

export default Navbar