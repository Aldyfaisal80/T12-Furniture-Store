import MainLayout from "../components/layouts/MainLayout";
import Section1 from "./section/home/Section1";
import Section2 from "./section/home/Section2";
import Section3 from "./section/home/Section3";
import Section4 from "./section/home/Section4";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <Section1 />
      </div>
      <div className="w-full min-h-screen mt-[60px]">
        <Section2 />
      </div>
      <div className="w-full min-h-screen mt-[60px]">
        <Section3 />
      </div>
      <div className="w-full min-h-screen mt-[60px]">
        <Section4 />
      </div>
    </MainLayout>
  )
}
