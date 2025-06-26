import Portfolio from "@/Components/Portfolio";
import { fundPortfolio } from "@/lib/api";
import { IFund } from "@/lib/types";
import { funds } from "@/lib/dummyData";
export default async function portfolio() {
  const funds: IFund[] = await fundPortfolio();

  return (
    <>
      <Portfolio fundDetails={funds} />
    </>
  );
}
