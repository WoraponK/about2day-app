import React, { useState, useEffect } from 'react'

import MoodIcon from '../icons/MoodIcon'
import LanguageSwap from '../LanguageSwap';

function HowBoutDayButton() {
    const [language, setLanguage] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [setHour, isSetHour] = useState(0);
    const [setMinute, isSetMinute] = useState(0)

    useEffect(() => {
        const languageCheck = () => {
            const l = localStorage.getItem('language');
            if (l) {
                setLanguage(l);
            }
        }

        const updateButtonState = () => {
            const time = localStorage.getItem('settime');
            if (time) {
                const parseTime = JSON.parse(time);

                setTime(parseTime.hour, parseTime.minute);
                IsDisabledBoolean(parseTime.hour, parseTime.minute);
            }
        }

        languageCheck();
        updateButtonState();

        const intervalId = setInterval(updateButtonState, 30000);
        return () => clearInterval(intervalId);
    }, [])

    const setTime = (h: number, m: number) => {
        isSetHour(h);
        isSetMinute(m);
    }

    const IsDisabledBoolean = (setHour: number, setMinute: number) => {
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();

        if (currentHour < setHour && currentHour >= 0 || (currentHour == setHour && currentMinute < setMinute)) {
            return setIsDisabled(true)
        } else {
            return setIsDisabled(false)
        }
    }

    return (
        <button
            className='bg-clr-secondary-1 py-2 px-4 max-sm:py-1 max-sm:px-3 max-[408px]:p-2 text-lg rounded-full flex items-center  space-x-3 transition-all active:scale-95 hover:bg-clr-secondary-2 disabled:bg-clr-light/70 disabled:cursor-not-allowed disabled:active:scale-100'
            disabled={isDisabled}
        >
            <MoodIcon level={5} size={25} />
            <span className='max-[408px]:hidden font-semibold'>
                {isDisabled ? (
                    <LanguageSwap
                        en={`Ready ${setHour.toString().padStart(2, '0')}:${setMinute.toString().padStart(2, '0')}`}
                        th={`พร้อม ${setHour.toString().padStart(2, '0')}:${setMinute.toString().padStart(2, '0')}`}
                    />
                ) : (
                    <LanguageSwap
                        en='BoutDay'
                        th='วันนี้เป็นไง'
                    />
                )}
            </span>
        </button>
    )
}

export default HowBoutDayButton