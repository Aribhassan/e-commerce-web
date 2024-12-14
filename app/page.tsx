
import Hero from "@/components/heroSection";
import CompanyLogo from "@/components/companyLogo";
import Featuredproduct from "@/components/featuredproduct";
import Categories from "@/components/Categories";
import HotProduct from "@/components/hotProducts";
import OurProduct from "@/components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Featuredproduct/>
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
