import { FaTableCellsLarge } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <nav className="flex justify-between font-Poppins mt-2">
      <div className="flex items-center">
        <h1>FURNITURE.ME</h1>
      </div>
      <div className="flex items-center justc gap-6">
        <FaTableCellsLarge />
        <select className="outline-none" name="" id="">
          <option value="">All Categories</option>
          <option value="">Sofa</option>
          <option value="">Chair</option>
          <option value="">Table</option>
        </select>
        <ul className="flex gap-6">
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover:text-blue-500 before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#">Home</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover:text-blue-500 before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#">Services</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover:text-blue-500 before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#">Blog</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover:text-blue-500 before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#">Contact</a>
          </li>
          <li className="relative text-black cursor-pointer transition-all ease-in-out hover:text-blue-500 before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <FaRegHeart size={20} />
        <GrCart size={20} />
        <CiSearch size={25} />
        <button className="bg-primary-blue text-white p-2 rounded-lg">Get Started</button>
      </div>
    </nav>
  )
}
