'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import HowBoutDayButton from './buttons/HowBoutDayButton'

function Navbar() {
    const pathname = usePathname();
    const  [isNavHidden, setIsNavHidden] = useState(false)

    useEffect(() => {
        const prevScorllPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavHidden(currentScrollPos > prevScorllPos);
            window.scrollY = prevScorllPos;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return (
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
                            <p className='flex items-center space-x-2' title='Home'>
                                <i className="bi bi-house-fill"></i>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2' title='Home'>
                                    <i className="bi bi-house"></i>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/custom'}>
                        {pathname == '/custom' ? (
                            <p className='flex items-center space-x-2'title='Custom'> 
                                <i className="bi bi-brush-fill"></i>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2' title='Custom'>
                                    <i className="bi bi-brush"></i>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/overall'}>
                        {pathname == '/overall' ? (
                            <p className='flex items-center space-x-2' title='Overall'>
                                <i className="bi bi-calendar3-range-fill"></i>

                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2' title='Overall'>
                                    <i className="bi bi-calendar3-range"></i>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/setting'}>
                        {pathname == '/setting' ? (
                            <p className='flex items-center space-x-2' title='Setting'>
                                <i className="bi bi-gear-fill"></i>
                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2' title='Setting'>
                                    <i className="bi bi-gear"></i>
                                </p>
                            )
                        }
                    </Link>
                </li>
                <li className='transition-colors hover:text-clr-primary'>
                    <Link href={'/about'}>
                        {pathname == '/about' ? (
                            <p className='flex items-center space-x-2' title='About'>
                                <i className="bi bi-info-circle-fill"></i>

                            </p>
                        )
                            : (
                                <p className='flex items-center space-x-2' title='About'>
                                    <i className="bi bi-info-circle"></i>
                                </p>
                            )
                        }
                    </Link>
                </li>
            </ul>
            <HowBoutDayButton />
        </nav>
    )
}

export default Navbar