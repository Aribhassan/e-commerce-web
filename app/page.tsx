
import Hero from "./components/heroSection";
import CompanyLogo from "./components/companyLogo";
import Categories from "./components/Categories";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
