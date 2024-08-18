/* eslint-disable react/prop-types */
import Navbar from "../fragments/S1Navbar";
import Footer from "../fragments/S4Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col w-full gap-[80px]">
        {/* section 1 */}
        <div className="flex flex-col w-full min-h-screen">
            <Navbar />

            <div className="flex flex-col w-full">
                {children}
            </div>

            <Footer />
        </div>
    </div>
  )
}
