import Portfolio from "@/Components/Portfolio";
import { fundPortfolio } from "@/lib/api";
import { IFund } from "@/lib/types";
import { funds } from "@/lib/dummyData";
export default async function dashboard() {
  const funds: IFund[] = await fundPortfolio();//api call

  return (
    <>
      <Portfolio fundDetails={funds} />
    </>
  );
}
