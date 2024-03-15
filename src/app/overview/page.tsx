'use client'

import React, { useEffect, useState } from 'react'
import { Finance } from '../types';

function OverviewPage() {
  const [income, setIncome] = useState<Finance[]>([]);
  const [expenses, setExpenses] = useState<Finance[]>([]);

  useEffect(() => {
    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Overview' : 'ภาพรวม'} - about2day`
      }
    }

    const pullFinance = () => {
      const existingIncome = localStorage.getItem('income');
      const existingExpenses = localStorage.getItem('expenses');

      const parseIncome = existingIncome ? JSON.parse(existingIncome) : [];
      const parseExpenses = existingExpenses ? JSON.parse(existingExpenses) : [];

      setIncome(parseIncome);
      setExpenses(parseExpenses);
    }
    languageCheck();
    pullFinance();
  }, [])

  // Income Model
  const totalIncome = income.reduce((total, data) => total + data.amount, 0);
  const totalSalaryIncome = income.filter(data => data.type === 'in-salary').reduce((total, data) => total + data.amount, 0);
  const totalExtraIncome = income.filter(data => data.type === 'in-extra').reduce((total, data) => total + data.amount, 0);
  const totalPeopleIncome = income.filter(data => data.type === 'in-people').reduce((total, data) => total + data.amount, 0);

  // Expenses Model
  const totalExpenses = expenses.reduce((total, data) => total + data.amount, 0);
  const totalGamingExpenses = expenses.filter(data => data.type === 'data-gaming').reduce((total, data) => total + data.amount, 0);
  const totalFoodsExpenses = expenses.filter(data => data.type === 'data-foods').reduce((total, data) => total + data.amount, 0);
  const totalHouseExpenses = expenses.filter(data => data.type === 'data-house').reduce((total, data) => total + data.amount, 0);
  const totalShoppingExpenses = expenses.filter(data => data.type === 'data-shopping').reduce((total, data) => total + data.amount, 0);
  const totalToolsExpenses = expenses.filter(data => data.type === 'data-tools').reduce((total, data) => total + data.amount, 0);
  const totalPhoneExpenses = expenses.filter(data => data.type === 'data-phone').reduce((total, data) => total + data.amount, 0);


  return (
    <div className='px-24 grid grid-cols-1 space-y-16 max-lg:px-20 max-md:px-8 max-sm:px-0'>
      <section>
        <p>{totalIncome}</p>
        <p>{totalExpenses}</p>
      </section>
    </div>
  )
}

export default OverviewPage