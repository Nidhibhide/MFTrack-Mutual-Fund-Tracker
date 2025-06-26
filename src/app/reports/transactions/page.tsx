import Transactions from "@/Components/Reports/Components/Transactions";
import { getTransactions } from "@/lib/api";
import { ITransaction } from "@/lib/types";
import { data } from "@/lib/dummyData";

export default async function transactions() {
  // const data: ITransaction[] = await getTransactions();

  return (
    <>
      <Transactions transactionDetails={data} />
    </>
  );
}
