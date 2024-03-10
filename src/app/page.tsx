"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


// Components
import ExpensesTool from "./components/tool/ExpensesTool";
import ExpensesTable from "./components/table/ExpensesTable";
import IncomeTool from "./components/tool/IncomeTool";
import IncomeTable from "./components/table/IncomeTable";

import LanguageSwap from "./components/LanguageSwap";

import { Finance, BoutDay } from "./types";

export default function Home() {
  const [expenses, setExpenses] = useState<Finance[]>([])
  const [income, setIncome] = useState<Finance[]>([])

  useEffect(() => {
    const defaultLanguage = () => {
      const checkLanguage = localStorage.getItem("language");
      if (!checkLanguage) {
        localStorage.setItem("language", "en")
      }
    }

    const languageCheck = () => {
      const l = localStorage.getItem('language');
      if (l) {
        document.title = `${l === 'en' ? 'Home' : 'หน้าหลัก'} - about2day`
      }
    }

    const checkBoutDayTime = () => {
      const existingBoutDay = localStorage.getItem('settime');
      const defaultTime: BoutDay = {
        hour: 22,
        minute: 0
      }

      if (!existingBoutDay) {
        localStorage.setItem('settime', JSON.stringify(defaultTime))
      }
    }

    defaultLanguage();
    languageCheck();
    checkBoutDayTime();
  }, [])

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0)
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0)
  const totalAmount = totalIncome - totalExpenses

  return (
    <>
      <div className="grid grid-cols-[35%_65%] space-x-4 max-md:grid-cols-1 max-md:space-x-0 max-md:space-y-16">
        <div className="flex flex-col space-y-4 max-md:flex-row max-md:space-y-0 max-md:space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
          <IncomeTool income={income} setIncome={setIncome} />
          <ExpensesTool expenses={expenses} setExpenses={setExpenses} />
        </div>
        <div className="space-y-6">
          <div className="flex justify-end items-end text-3xl font-semibold">
            <div className="w-3/4 flex justify-between bg-clr-accent py-1 px-4 rounded-xl max-lg:w-full">
              <h2 className="text-clr-secondary-1">
                <i className="bi bi-piggy-bank mr-2"></i>
                <LanguageSwap en="Difference" th="ผลต่าง" />
              </h2>
              {totalAmount > 0 ? (
                <h3 className="text-clr-yellow">
                  {totalAmount} <span>฿</span>
                </h3>
              ) : totalAmount == 0 ? (
                <h3 className="text-clr-light">
                  {totalAmount} <span>฿</span>
                </h3>
              ) : (
                <h3 className="text-clr-red">
                  {totalAmount} <span>฿</span>
                </h3>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-4 max-lg:space-x-0 max-lg:space-y-4 max-lg:flex max-lg:flex-col">
            <IncomeTable income={income} setIncome={setIncome} />
            <ExpensesTable expenses={expenses} setExpenses={setExpenses} />
          </div>
        </div>
      </div >
    </>
  );
}
