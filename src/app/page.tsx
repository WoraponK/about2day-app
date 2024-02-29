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
      <div className="grid grid-cols-[35%_65%]">
        <div className="flex flex-col gap-4">
          <IncomeTool />
          <ExpensesTool />
        </div>
        <div className="grid grid-cols-2">

        </div>
      </div>
    </>
  );
}
