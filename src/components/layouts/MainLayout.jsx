import Navbar from "../fragments/S1Navbar";
import Footer from "../fragments/S4Footer";
import Section1 from "./sub-layout/Section1";
import Section2 from "./sub-layout/Section2";
import Section3 from "./sub-layout/Section3";
import Section4 from "./sub-layout/Section4";

export default function MainLayout() {
  return (
    <div className="flex flex-col w-full px-[80px] gap-[80px]">
        {/* section 1 */}
        <div className="flex flex-col w-full min-h-screen border-2 border-primary-gray">
            <Navbar />

            <Section1 />
        </div>

        {/* section 2 */}
        <div className="flex flex-col w-full min-h-screen border-2 border-primary-gray">
            <Section2 />
        </div>

        {/* section 3 */}
        <div className="flex flex-col w-full min-h-screen bg-primary-blue border-2 border-primary-gray">
            <Section3 />
        </div>

        {/* section 4 */}
        <div className="flex flex-col w-full min-h-screen bg-primary-blue border-2 border-primary-gray">
            <Section4 />

            <Footer />
        </div>
    </div>
  )
}
