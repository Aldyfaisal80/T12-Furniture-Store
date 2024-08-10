import { MdOutlineDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import PrimaryButton from "../elements/PrimaryButton";



export default function Navbar() {
  return (
    <nav className="flex justify-between font-Poppins text-[1.2rem] mt-2">
      <div className="flex items-center">
        <h1 className="italic font-extrabold text-[1.5rem]">FURNITURE<span className="text-primary-blue">.ME</span></h1>
      </div>
      <div className="flex items-center justc gap-6">
        <MdOutlineDashboard size={25}/>
        <select className="outline-none p-1 bg-transparent" name="" id="">
          <option value="">All Categories</option>
          <option value="">Sofa</option>
          <option value="">Chair</option>
          <option value="">Table</option>
        </select>
        <ul className="flex gap-6">
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover-underline">
            <a href="#">Home</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover-underline">
            <a href="#">Services</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover-underline">
            <a href="#">Blog</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover-underline">
            <a href="#">Contact</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover-underline">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <FaRegHeart size={20} />
        <GrCart size={20} />
        <CiSearch size={25} />
        <PrimaryButton.BlueButton text={"Get Started"} className={"z-10"} />
      </div>  
    </nav>
  )
}
