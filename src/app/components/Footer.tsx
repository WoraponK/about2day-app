import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='p-16 grid grid-cols-2 border-t border-clr-light/90 max-md:grid-cols-1 max-md:gap-16 max-md:px-8'>
            <div className='space-y-4 flex flex-col max-md:items-center'>
                <Image
                    width={75}
                    height={75}
                    src={'/images/symbol-nobg.png'}
                    alt='logo'
                />
                <div className='max-md:text-center'>
                    <h2 className='text-3xl'>about2day</h2>
                    <p className='text-xl'>Copyright © 2024</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='flex flex-col space-y-2 text-xl uppercase'>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/overall'}>Overall</Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/setting'}>Setting</Link>
                    </li>
                    <li className='transition-colors hover:text-clr-primary'>
                        <Link href={'/about'}>About</Link>
                    </li>
                </ul>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-2xl text-clr-light/90'>Support me</h2>
                        <a href="https://www.buymeacoffee.com/tellytawin" target='_blank'>
                            <button className='py-2 px-4 text-xl rounded bg-yellow-500 hover:bg-yellow-400 text-clr-dark'><i className="bi bi-cup-hot-fill mr-2"></i>buymeacoffee</button>
                        </a>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-2xl text-clr-light/90'>Social</h2>
                        <ul className='flex text-3xl space-x-4'>
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
        </footer>
    )
}

export default Footer