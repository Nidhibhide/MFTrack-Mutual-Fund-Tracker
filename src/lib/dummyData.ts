import { IFund, ITransaction } from "./types";

export const funds: IFund[] = [
  {
    id: 1,
    fundName: "Axis Bluechip Fund",
    totalUnits: 30,
    currentNAV: 38.75,
    currentValue: 1162.5,
  },
  {
    id: 2,
    fundName: "HDFC Equity Fund",
    totalUnits: 30,
    currentNAV: 52.1,
    currentValue: 1563,
  },
  {
    id: 3,
    fundName: "SBI Small Cap Fund",
    totalUnits: 50,
    currentNAV: 90.25,
    currentValue: 4512.5,
  },
  {
    id: 4,
    fundName: "Kotak Flexicap Fund",
    totalUnits: 25,
    currentNAV: 62.4,
    currentValue: 1560,
  },
];

export const data: ITransaction[] = [
  {
    id: 1,
    fundName: "Axis Bluechip Fund",
    action: "BUY",
    units: 50,
    nav: 35.0,
    totalValue: 1750,
    date: "2025-01-10",
  },
  {
    id: 2,
    fundName: "Axis Bluechip Fund",
    action: "SELL",
    units: 20,
    nav: 38.75,
    totalValue: 775,
    date: "2025-03-10",
  },

  {
    id: 3,
    fundName: "HDFC Equity Fund",
    action: "BUY",
    units: 60,
    nav: 50.0,
    totalValue: 3000,
    date: "2025-01-12",
  },
  {
    id: 4,
    fundName: "HDFC Equity Fund",
    action: "SELL",
    units: 30,
    nav: 48.1,
    totalValue: 1443,
    date: "2025-03-22",
  },

  {
    id: 5,
    fundName: "SBI Small Cap Fund",
    action: "BUY",
    units: 80,
    nav: 82.0,
    totalValue: 6560,
    date: "2025-01-18",
  },
  {
    id: 6,
    fundName: "SBI Small Cap Fund",
    action: "SELL",
    units: 30,
    nav: 90.25,
    totalValue: 2707.5,
    date: "2025-04-04",
  },

  {
    id: 7,
    fundName: "Kotak Flexicap Fund",
    action: "BUY",
    units: 50,
    nav: 65.0,
    totalValue: 3250,
    date: "2025-01-08",
  },
  {
    id: 8,
    fundName: "Kotak Flexicap Fund",
    action: "SELL",
    units: 25,
    nav: 62.4,
    totalValue: 1560,
    date: "2025-03-28",
  },
];
