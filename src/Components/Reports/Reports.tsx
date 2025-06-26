"use client";

import Link from "next/link";

const Reports = () => {
  return (
    <div className="w-full h-full shadow-lg rounded-2xl py-12 px-4">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        Reports List
      </h1>

      <ul className="space-y-4">
        <li>
          <Link
            href="/reports/transactions"
            className="block w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-5 px-4 rounded-lg text-left text-lg"
          >
            Transactions Report
          </Link>
        </li>

        <li>
          <Link
            href="/reports/capital-gains"
            className="block w-full bg-green-100 hover:bg-green-200 text-green-800 font-bold py-5 px-4 rounded-lg text-left text-lg"
          >
            Capital Gains Chart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Reports;
