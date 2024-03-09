import React, { useEffect, useState } from 'react'

import MoodIcon from '../components/icons/MoodIcon'
import Modal from '../components/Modal'
import LanguageSwap from '../components/LanguageSwap';


function AddCustomizeButton() {
    const [isModal, setIsModal] = useState(false);

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    const InnerModal = () => (
        <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-center uppercase'>
                <LanguageSwap
                    en='Choose your today type'
                    th='เลือกประเภทข้อมูลของคุณ'
                />
            </h3>
            <form>
                <div className='flex justify-end space-x-2'>
                    <button
                        type='button'
                        className='btn border-none text-clr-light bg-clr-primary transitoin-colors hover:bg-clr-primary/80'
                        onClick={handleSubmit}
                    >
                        <LanguageSwap en='Sure' th='ยืนยัน' />
                    </button>
                    <button
                        className='btn border-none text-clr-light bg-clr-red transition-colors hover:bg-clr-red/80'
                        onClick={toggleModal}
                        type='button'
                    >
                        <LanguageSwap en='Cancel' th='ยกเลิก' />
                    </button>
                </div>
            </form>
        </div>
    );

    const handleSubmit = () => {
        console.log('today button!')
        toggleModal();
    };

    return (
        <>
            <button onClick={toggleModal} className='transition-all active:scale-95 bg-clr-primary uppercase py-6 px-4 rounded-xl group cursor-pointer hover:bg-clr-primary/60 flex flex-col items-center space-y-2 font-semibold'>
                <div>
                    <div className='block group-hover:hidden'>
                        <MoodIcon level={4} size={35} />
                    </div>
                    <div className='hidden group-hover:block group-hover:animate-bounce'>
                        <MoodIcon level={5} size={35} />
                    </div>
                </div>
                <div>
                    <span className='block'>Add</span>
                    <span className='block'>Your Today</span>
                </div>
            </button>
            {isModal && (
                <Modal>
                    <InnerModal />
                </Modal>
            )}
        </>
    )
}

export default AddCustomizeButton