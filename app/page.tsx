import { getBenefits, getDiscounts } from "@/lib/api";
import { Benefits } from "./home/components/Benefits";
import { Discounts } from "./home/components/Discounts";
import Banner from "./home/components/Banner";

export default async function Home() {
  const { benefits, discounts } = await getDiscountsAndBenefits();

  return (
    <main>
      <Banner />
      <Benefits {...benefits} />
      <Discounts {...discounts} />
    </main>
  );
}

const getDiscountsAndBenefits = async () => {
  const [benefitsResponse, discountsResponse] = await Promise.allSettled([
    getBenefits(),
    getDiscounts(),
  ]);

  const benefits = {
    data:
      benefitsResponse.status === "fulfilled" ? benefitsResponse.value : null,
    error:
      benefitsResponse.status === "rejected" ? benefitsResponse.reason : null,
  };

  const discounts = {
    data:
      discountsResponse.status === "fulfilled" ? discountsResponse.value : null,
    error:
      discountsResponse.status === "rejected" ? discountsResponse.reason : null,
  };

  return {
    benefits,
    discounts,
  };
};
