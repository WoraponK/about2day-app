import React, { useState } from 'react'

function LanguageSwap({ en, th }: { en: string, th: string }) {
    const [language, setLanguage] = useState(localStorage.getItem('language'));

    return (
        <>
            {language === 'en'
                ? `${en}`
                : `${th}`}
        </>
    )
}

export default LanguageSwap