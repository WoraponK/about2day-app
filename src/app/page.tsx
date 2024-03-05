"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


// Components
import ExpensesTool from "./components/tool/ExpensesTool";
import ExpensesTable from "./components/table/ExpensesTable";
import IncomeTool from "./components/tool/IncomeTool";
import IncomeTable from "./components/table/IncomeTable";

import { Finance } from "./types";

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

    defaultLanguage();
    languageCheck();
  }, [])

  return (
    <>
      <div className="grid grid-cols-[35%_65%] space-x-4 max-md:grid-cols-1 max-md:space-x-0 max-md:space-y-8">
        <div className="flex flex-col space-y-4 max-md:flex-row max-md:space-y-0 max-md:space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
          <IncomeTool income={income} setIncome={setIncome}/>
          <ExpensesTool expenses={expenses} setExpenses={setExpenses}/>
        </div>
        <div className="grid grid-cols-2 space-x-4 max-lg:space-x-0 max-lg:space-y-4 max-lg:flex max-lg:flex-col">
          <IncomeTable income={income} setIncome={setIncome}/>
          <ExpensesTable expenses={expenses} setExpenses={setExpenses}/>
        </div>
      </div>
    </>
  );
}
