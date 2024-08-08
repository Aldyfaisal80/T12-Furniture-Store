import { FaFacebookF } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { TfiInstagram } from "react-icons/tfi";


import FooterImg from "../../../public/assets/images/gmap.png"
export default function Footer() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-6 w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold italic">FURNITURE<span className="text-gray-500">.ME</span></h1>
          <p className="text-gray-500/90 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> At itaque sed aperiam dolorum soluta debitis mollitia <br /> eum perspiciatis fugit, suscipit cum <span className="underline hover-underline hover:no-underline"><a href="#">Learn More</a></span></p>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Morning Hours</h1>
          <span className="flex gap-[70px] mt-5 text-gray-500/90 font-semibold">Saturday - Thusday <span>Friday</span></span>
          <span className="flex gap-[57px] text-gray-500/90 font-semibold">08:00 AM - 10:00 PM <span>Closed</span></span>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">OUR LOCATION</h1>
          <span className="text-gray-500/90 font-semibold">Jordan- Amman - 7th circle - St.3 - 67</span>
        </div>
      </div>
      <div className="flex justify-between flex-col w-[50%]">
        <div className="flex justify-between">
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold"><a href="#">NAVIGATION</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">Home</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">Event</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">Services</a></li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-medium"><a href="#">GET TO KNOW US</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">Careers</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">Blog</a></li>
            <li className="font-medium text-gray-600"><a className="hover-underline" href="#">About Furniture.ME</a></li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold"><a href="#">FOLLOW US</a></li>
            <div className="flex gap-4 text-primary-blue">
              <li>{<FaFacebookF size={24} />}</li>
              <li>{<RxTwitterLogo size={24} />}</li>
              <li>{<TfiInstagram size={24} />}</li>
            </div>
          </ul>
        </div>
        <div className="mt-10">
          <img src={FooterImg} alt="IMG" />
        </div>
      </div>
    </div>
  )
}
