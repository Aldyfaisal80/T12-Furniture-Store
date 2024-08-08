import { CiHeart } from "react-icons/ci";
import { RiStarSFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import Chair1 from '../../../../public/assets/images/1.png'
import Chair2 from '../../../../public/assets/images/2.png'
import Chair3 from '../../../../public/assets/images/3.png'
import Chair4 from '../../../../public/assets/images/24.png'
import Chair5 from '../../../../public/assets/images/25.png'
import Chair6 from '../../../../public/assets/images/26.png'
import Chair7 from '../../../../public/assets/images/27.png'
import Chair8 from '../../../../public/assets/images/28.png'


export default function Section2() {
    return (
        <section className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h1 className="text-4xl font-semibold">Popular Products</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatem <br /> nesciunt minima natus deserunt odit.</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-6 w-[1280px]">
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair1} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair2} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair3} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair4} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair5} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair6} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair7} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray"><CiHeart size={26} /></span>
                        <img src={Chair8} alt="" className="p-4 w-[220px] aspect-square" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-center">Mad Queen Armchair</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, maiores.</p>
                            <span className="flex text-yellow-500">
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </span>
                            <span>
                                <p className="font-bold">4.5 <span className="font-normal">/ 50 Reviews</span></p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.3rem] font-bold">$39.99</h1>
                        <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg">Add to cart <FaCartPlus /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
