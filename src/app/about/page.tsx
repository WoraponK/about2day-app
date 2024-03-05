'use client'

import React, { useEffect, useState } from 'react'

import LanguageSwap from '../components/LanguageSwap';

function AboutPage() {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        setLanguage(l);
        document.title = `${l === 'en' ? 'About' : 'เกี่ยวกับ'} - about2day`
      }
    }
    languageCheck();
  }, [])

  return (
    <div className='space-y-12 px-32 max-lg:px-16 max-md:px-8 max-sm:px-0'>
      <section className='space-y-2'>
        <h3 className='text-3xl font-semibold text-center'>
          <LanguageSwap en='What is about2day ?' th='อะไรคือ about2day' />
        </h3>
        <p>
          <LanguageSwap
            en=''
            th='โดยเริ่มต้นแล้ว abou2day ได้มีดีไซน์และเป้าหมายในการสร้างเป็นแอปพลิเคชันบนมือถือ แต่ในปัจจุบันมีความคิดที่อยากจะทำเป็นเว็บแอปพลิเคชันเลยได้มีโอกาสสร้างเว็บไซต์นี้ขึ้นมา แต่ถ้าถามว่ายังอยากสร้างเป็นแอปพลิเคชันบนมือถือไหม ? แน่นอนว่าเรายังต้องการที่จะสร้างมันขึ้นมา'
          />
        </p>
      </section>
      <section className='space-y-2'>
        <h3 className='text-3xl font-semibold text-center'>
          <LanguageSwap en='Why about2day ?' th='ทำไมต้อง about2day' />
        </h3>
        <p>
          <LanguageSwap
            en=''
            th='ต้องการบันทึกข้อมูลในแต่ละวันไหมล่ะ ? ถ้าใช่ เว็บไซต์ของเราสามารถตอบโจทย์ให้คุณได้ โดยการบันทึกหลักของเราก็คือ "รายรับ-รายจ่าย" แต่ไม่ได้มีแค่นั้น คุณยังสามารถที่จะสร้างการบันทึกของคุณมาได้ แต่จะเป็นการบันทึกในรูปแบบจำนวนครั้งหรือความพึงพอใจ'
          />
        </p>
      </section>
      <section className='space-y-2'>
        <h3 className='text-3xl font-semibold text-center'>
          <LanguageSwap en='What is "BoutDay?" Button' th='อะไรคือปุ่ม "วันนี้เป็นไง?"' />
        </h3>
        <p>
          <LanguageSwap
            en=''
            th='ในแต่ละวันคุณรู้สึกพึงพอใจมากแค่ไหนกันล่ะ ? คุณสามารถบันทึกความพึงพอใจในแต่ละวันได้'
          />
        </p>
      </section>
    </div>
  )
}

export default AboutPage