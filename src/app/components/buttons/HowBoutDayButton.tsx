import React, { useState, useEffect } from 'react'

import MoodIcon from '../icons/MoodIcon'

function HowBoutDayButton() {
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
        <button className='bg-clr-secondary-1 py-2 px-4 max-sm:p-3 text-lg rounded-full flex items-center  gap-1 transition-colors hover:bg-clr-secondary-2'>
            <MoodIcon level={5} size={25} />
            <span className='max-sm:hidden'>
                {language === 'en'
                ? 'How bout2day?'
                : 'วันนี้เป็นไง?'}
            </span>
        </button>
    )
}

export default HowBoutDayButton