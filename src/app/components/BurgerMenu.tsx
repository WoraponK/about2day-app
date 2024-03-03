import React, { useContext } from 'react'
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

    const handleBurger = () => {
        setIsBurger((prevBurger: boolean) => !prevBurger)
    }

    return (
        <>
            {isBurger ? (
                <div className={`fixed right-0 top-0 backdrop-blur-lg bg-clr-primary/60 h-screen opacity-0 w-0 transition-all duration-300 max-md:w-[400px] z-[999] max-md:opacity-100 max-md:flex max-md:flex-col max-sm:w-full`}>
                    <div onClick={handleBurger} className='flex justify-between items-center px-8 py-7 text-3xl max-sm:py-5'>
                        <HowBoutDayButton />
                        <div className='w-[40px] aspect-square flex justify-center items-center translate-y-px bg-clr-light/40 rounded-full transition-colors hover:bg-clr-light/75 cursor-pointer'>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    <ul className='flex flex-col space-y-8 uppercase text-4xl md:hidden px-8 py-8'>
                        <li className='transition-colors hover:text-clr-secondary-2'>
                            <Link href={'/'}>
                                {pathname == '/' ? (
                                    <p className='flex items-center space-x-2' title='Home'>
                                        <i className="bi bi-house-fill"></i>
                                        <span>Home</span>
                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2' title='Home'>
                                            <i className="bi bi-house"></i>
                                            <span>Home</span>
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2'>
                            <Link href={'/customize'}>
                                {pathname == '/customize' ? (
                                    <p className='flex items-center space-x-2' title='Customize'>
                                        <i className="bi bi-brush-fill"></i>
                                        <span>Customize</span>
                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2' title='Customize'>
                                            <i className="bi bi-brush"></i>
                                            <span>Customize</span>
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2'>
                            <Link href={'/overall'}>
                                {pathname == '/overall' ? (
                                    <p className='flex items-center space-x-2' title='Overall'>
                                        <i className="bi bi-calendar3-range-fill"></i>
                                        <span>Overall</span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2' title='Overall'>
                                            <i className="bi bi-calendar3-range"></i>
                                            <span>Overall</span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2'>
                            <Link href={'/setting'}>
                                {pathname == '/setting' ? (
                                    <p className='flex items-center space-x-2' title='Setting'>
                                        <i className="bi bi-gear-fill"></i>
                                        <span>Setting</span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2' title='Setting'>
                                            <i className="bi bi-gear"></i>
                                            <span>Setting</span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                        <li className='transition-colors hover:text-clr-secondary-2'>
                            <Link href={'/about'}>
                                {pathname == '/about' ? (
                                    <p className='flex items-center space-x-2' title='About'>
                                        <i className="bi bi-info-circle-fill"></i>
                                        <span>About</span>

                                    </p>
                                )
                                    : (
                                        <p className='flex items-center space-x-2' title='About'>
                                            <i className="bi bi-info-circle"></i>
                                            <span>About</span>

                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                    </ul>
                    <div className='flex flex-col space-y-6 px-8'>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-3xl text-clr-light/90'>Support me</h2>
                            <a href="https://www.buymeacoffee.com/tellytawin" target='_blank'>
                                <button className='py-2 w-full text-xl rounded bg-yellow-500 hover:bg-yellow-400 text-clr-dark'><i className="bi bi-cup-hot-fill mr-2"></i>buymeacoffee</button>
                            </a>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-3xl text-clr-light/90'>Social</h2>
                            <ul className='flex text-5xl justify-around'>
                                <a className='transition-colors hover:text-clr-primary h-fit' href="https://www.facebook.com/ggtellytawin/" target='_blank'>
                                    <li >
                                        <i className="bi bi-facebook"></i>
                                    </li>
                                </a>
                                <a className='transition-colors hover:text-clr-primary h-fit' href="https://www.facebook.com/ggtellytawin/" target='_blank'>
                                    <li >
                                        <i className="bi bi-instagram"></i>
                                    </li>
                                </a>
                                <a className='transition-colors hover:text-clr-primary h-fit' href="https://www.facebook.com/ggtellytawin/" target='_blank'>
                                    <li >
                                        <i className="bi bi-github"></i>
                                    </li>
                                </a>
                                <a className='transition-colors hover:text-clr-primary h-fit' href="https://www.youtube.com/@WoraponKS" target='_blank'>
                                    <li >
                                        <i className="bi bi-youtube"></i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (null)}
        </>
    )
}

export default BurgerMenu