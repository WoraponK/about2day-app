import React, { useState, useEffect } from 'react'

import MoodIcon from '../icons/MoodIcon'

function HowBoutDayButton() {
    const [language, setLanguage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const languageCheck = () => {
            const l = localStorage.getItem('language');
            if (l) {
                setLanguage(l);
            }
        }

        const updateButtonState = () => {
            const currentHour = new Date().getHours();
            const currentMinute = new Date().getMinutes();

            setIsDisabled(currentHour < 22 || (currentHour === 22 && currentMinute >= 0) || currentHour >= 0)
        }

        languageCheck();
        updateButtonState();

        const intervalId = setInterval(updateButtonState, 60000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <button
            className='bg-clr-secondary-1 py-2 px-4 max-sm:py-1 max-sm:px-3 text-lg rounded-full flex items-center  space-x-3 transition-all active:scale-95 hover:bg-clr-secondary-2 disabled:bg-clr-light/70 disabled:cursor-not-allowed disabled:active:scale-100'
            disabled={isDisabled}
        >
            <MoodIcon level={5} size={25} />
            <span className='font-semibold'>
                {language === 'en'
                    ? 'BoutDay?'
                    : 'วันนี้เป็นไง?'}
            </span>
        </button>
    )
}

export default HowBoutDayButton