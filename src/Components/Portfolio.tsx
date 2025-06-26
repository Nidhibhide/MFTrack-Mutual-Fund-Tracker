"use client";
import React, { useState } from "react";
import { IFund } from "@/lib/types";

type PortfolioProps = {
  fundDetails: IFund[];
};
const Portfolio: React.FC<PortfolioProps> = ({ fundDetails }) => {
  const [funds, setFunds] = useState(fundDetails || []);

  const totalValue = funds.reduce((acc, item) => acc + item.currentValue, 0);
  const totalUnits = funds.reduce((acc, item) => acc + item.totalUnits, 0);
  const averageNAV: number = totalUnits !== 0 ? totalValue / totalUnits : 0;

  return (
    <div className="py-12 px-5 w-full h-full">
      <h1 className="text-2xl font-bold text-center mb-4">
      My Portfolio
      </h1>
      <div className="max-w-3xl mx-auto mb-8">
        <div className="grid md:grid-cols-3 gap-6 text-white">
          <div className="bg-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-sm">Total Units</p>
            <p className="text-2xl font-bold mt-1">{totalUnits.toFixed(2)}</p>
          </div>

          <div className="bg-green-600 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-sm">Total Current Value</p>
            <p className="text-2xl font-bold mt-1">₹{totalValue.toFixed(2)}</p>
          </div>

          <div className="bg-purple-600 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-sm">Average NAV</p>
            <p className="text-2xl font-bold mt-1">₹{averageNAV.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left ">Fund Name</th>
              <th className="px-4 py-2 text-left"> Total Units</th>
              <th className="px-4 py-2 text-left">Current NAV</th>
              <th className="px-4 py-2 text-left"> Current Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {funds.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No funds available.
                </td>
              </tr>
            ) : (
              funds.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">{item.fundName}</td>
                  <td className="px-4 py-2">{item.totalUnits}</td>
                  <td className="px-4 py-2">{item.currentNAV}</td>
                  <td className="px-4 py-2">{item.currentValue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
