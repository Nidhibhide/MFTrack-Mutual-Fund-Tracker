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
import { ITransaction } from "@/lib/types";
import { data as transactions } from "@/lib/dummyData";

const getMonth = (dateStr: string) =>
  new Date(dateStr).toLocaleString("default", { month: "short" });

const computeGainsDataPerFund = (txs: ITransaction[]) => {
  const buys: Record<string, ITransaction[]> = {};
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
      chart[tx.fundName] = (chart[tx.fundName] || 0) + gain;
      if (gain >= 0) totalGain += gain;
      else totalLoss += gain;
    }
  });

  const data = Object.entries(chart).map(([fundName, gain]) => ({
    fundName,
    gain: parseFloat(gain.toFixed(2)),
  }));

  return { data, totalGain, totalLoss, netGain: totalGain + totalLoss };
};

export default function CapitalGains() {
  // directly call the function
  const { data, totalGain, totalLoss, netGain } =
    computeGainsDataPerFund(transactions);

  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-center mb-4">
            Capital Gains Report
          </h1>

          <p className="text-gray-600 mt-2">
            Track your earnings and losses from sold mutual funds.
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
            <p className="text-2xl font-bold mt-1">
              ₹{Math.abs(totalLoss).toFixed(2)}
            </p>
          </div>
          <div className="bg-purple-600 text-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Net Capital Gain</p>
            <p className="text-2xl font-bold mt-1">₹{netGain.toFixed(2)}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Capital Gains by Fund
          </h2>
          <ResponsiveContainer width="100%" height={data.length * 60}>
            <BarChart data={data} layout="vertical" margin={{ left: 80 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                type="category"
                dataKey="fundName"
                width={150}
                tickFormatter={(name) =>
                  name.length > 16 ? name.slice(0, 14) + "…" : name
                }
              />
              <Tooltip />
              <Bar dataKey="gain" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
