import React, { useEffect, useState } from 'react'

function LanguageSwap({ en, th }: { en: string, th: string }) {
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
        <>
            {language === 'en'
                ? `${en}`
                : `${th}`}
        </>
    )
}

export default LanguageSwap