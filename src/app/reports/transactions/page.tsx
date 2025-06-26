import Transactions from "@/Components/Reports/Components/Transactions";
import { getTransactions } from "@/lib/api";
import { ITransaction } from "@/lib/types";

export default async function transactions() {
  // const data: ITransaction[] = await getTransactions();
   const data:ITransaction[] = [
    {
      id: 1,
      date: "2025-06-12",
      fundName: "HDFC Equity Fund",
      action: "BUY",
      units: 100,
      nav: 52,
      totalValue: 5200,
    },
    {
      id: 2,
      date: "2025-05-18",
      fundName: "ICICI Bluechip Fund",
      action: "SELL",
      units: 80,
      nav: 70,
      totalValue: 5600,
    },
  ];
  return (
    <>
      <Transactions transactionDetails={data} />
    </>
  );
}

 