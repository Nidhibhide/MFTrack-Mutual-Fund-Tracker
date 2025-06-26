"use client";

import { ITransaction } from "@/lib/types";
import { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";

type PortfolioProps = {
  transactionDetails: ITransaction[];
};

const Transactions: React.FC<PortfolioProps> = ({ transactionDetails }) => {
  const [month, setMonth] = useState<string>("");
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState<ITransaction[]>(
    transactionDetails || []
  );

  useEffect(() => {
    const filtered = transactionDetails.filter((txn) => {
      const txnMonth = new Date(txn.date).toLocaleString("default", {
        month: "long",
      });

      const matchMonth = month ? txnMonth === month : true;
      const matchSearch = search
        ? txn.fundName.toLowerCase().includes(search.toLowerCase())
        : true;

      return matchMonth && matchSearch;
    });

    setTransactions(filtered);
  }, [month, search, transactionDetails]);

  return (
    <div className="py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Transactions Report
      </h1>

      <div className="p-6 mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full">
              <MdFilterList className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {transactions.length > 0 ? (
          transactions.map((txn) => (
            <div
              key={txn.id}
              className="max-w-sm mx-auto bg-blue-100 border border-blue-200 shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300 h-[200px] w-[300px]"
            >
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {txn.fundName}
              </h2>
              <p className="text-base text-gray-700">
                <strong>Action:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    txn.action === "BUY" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {txn.action}
                </span>
              </p>
              <p className="text-base text-gray-700">
                <strong>Units:</strong> {txn.units}
              </p>
              <p className="text-base text-gray-700">
                <strong>NAV:</strong> ₹{txn.nav}
              </p>
              <p className="text-base text-gray-700">
                <strong>Total Value:</strong> ₹{txn.totalValue}
              </p>
              <p className="text-base text-gray-700">
                <strong>Date:</strong> {txn.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No transactions found.
          </p>
        )}
      </div>
    </div>
  );
};


export default Transactions;
