import Portfolio from "@/Components/Portfolio";
import { fundPortfolio } from "@/lib/api";
import { IFund } from "@/lib/types";
export default async function portfolio() {
  // const funds: IFund[] = await fundPortfolio();
  const funds:IFund[] = [
    {
      id: 1,
      fundName: "HDFC Equity Fund",
      totalUnits: 120.5,
      currentNAV: 45.67,
      currentValue: 5500.34,
    },
    {
      id: 2,
      fundName: "SBI Bluechip Fund",
      totalUnits: 80.0,
      currentNAV: 39.85,
      currentValue: 3188.0,
    },
    {
      id: 3,
      fundName: "ICICI Prudential Fund",
      totalUnits: 150.75,
      currentNAV: 50.0,
      currentValue: 7537.5,
    },
  ];
  return (
    <>
      <Portfolio fundDetails={funds} />
    </>
  );
}
