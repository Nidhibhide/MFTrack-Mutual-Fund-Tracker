"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMemo } from "react";

type Transaction = {
  id: string;
  fundName: string;
  action: "BUY" | "SELL";
  date: string;
  nav: number;
  units: number;
};

const transactions: Transaction[] = [
  { id: "1", fundName: "HDFC Equity Fund", action: "BUY", date: "2025-01-01", nav: 50, units: 100 },
  { id: "2", fundName: "HDFC Equity Fund", action: "SELL", date: "2025-06-01", nav: 70, units: 100 },
  { id: "3", fundName: "ICICI Bluechip Fund", action: "BUY", date: "2025-02-15", nav: 60, units: 50 },
  { id: "4", fundName: "ICICI Bluechip Fund", action: "SELL", date: "2025-06-20", nav: 72, units: 50 },
];

const getMonth = (dateStr: string) =>
  new Date(dateStr).toLocaleString("default", { month: "short" });

const computeGainsData = (txs: Transaction[]) => {
  const buys: Record<string, Transaction[]> = {};
  const chart: Record<string, number> = {};
  let totalGain = 0;
  let totalLoss = 0;

  txs.forEach((tx) => {
    if (tx.action === "BUY") {
      buys[tx.fundName] = buys[tx.fundName] || [];
      buys[tx.fundName].push(tx);
    }
  });

  txs.forEach((tx) => {
    if (tx.action === "SELL") {
      const buyTx = buys[tx.fundName]?.shift();
      if (!buyTx) return;

      const gain = (tx.nav - buyTx.nav) * tx.units;
      const month = getMonth(tx.date);
      chart[month] = (chart[month] || 0) + gain;
      if (gain >= 0) totalGain += gain;
      else totalLoss += gain;
    }
  });

  const data = Object.entries(chart).map(([month, gain]) => ({
    month,
    gain: parseFloat(gain.toFixed(2)),
  }));

  return { data, totalGain, totalLoss, netGain: totalGain + totalLoss };
};

export default function CapitalGains() {
  const { data, totalGain, totalLoss, netGain } = useMemo(
    () => computeGainsData(transactions),
    []
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">📈 Capital Gains Report</h1>
          <p className="text-gray-600 mt-2">
            Track your realized gains from mutual fund sales.
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-green-500 text-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Total Gain</p>
            <p className="text-2xl font-bold mt-1">₹{totalGain.toFixed(2)}</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Total Loss</p>
            <p className="text-2xl font-bold mt-1">₹{Math.abs(totalLoss).toFixed(2)}</p>
          </div>
          <div className="bg-purple-600 text-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Net Capital Gain</p>
            <p className="text-2xl font-bold mt-1">₹{netGain.toFixed(2)}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Monthly Capital Gains Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="gain" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
