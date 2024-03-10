import React, { useState } from 'react'

function Modal({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div
                className='fixed w-screen h-screen top-[0] left-[0] bg-black/50 z-[999] flex justify-center items-center'
            >
                <div
                    className='w-2/5 h-fit px-4 pt-8 pb-4 bg-clr-gray-1/90 rounded-3xl max-lg:w-1/2 max-md:w-3/4 max-sm:w-[95%]'
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal