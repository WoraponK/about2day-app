"use client"

import Image from "next/image";
import { useEffect } from "react";

// Components
import ExpensesTool from "./components/tools/ExpensesTool";
import ExpensesTable from "./components/table/ExpensesTable";
import IncomeTool from "./components/tools/IncomeTool";
import IncomeTable from "./components/table/IncomeTable";

export default function Home() {
  useEffect(() => {
    document.title = "Home - about2day"
  }, [])

  return (
    <>
      <div className="grid grid-cols-[35%_65%] space-x-4">
        <div className="flex flex-col space-y-4">
          <IncomeTool />
          <ExpensesTool />
        </div>
        <div className="grid grid-cols-2 space-x-4 max-lg:space-x-0 max-lg:space-y-4 max-lg:grid-cols-1 max-lg:grid-rows-2">
          <IncomeTable />
          <ExpensesTable />
        </div>
      </div>
    </>
  );
}
