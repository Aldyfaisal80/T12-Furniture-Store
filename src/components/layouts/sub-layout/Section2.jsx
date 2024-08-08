import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Chair1 from '../../../../public/assets/images/1.png'
import Chair2 from '../../../../public/assets/images/2.png'
import Chair3 from '../../../../public/assets/images/3.png'
import Chair4 from '../../../../public/assets/images/24.png'
import Chair5 from '../../../../public/assets/images/25.png'
import Chair6 from '../../../../public/assets/images/26.png'
import Chair7 from '../../../../public/assets/images/27.png'
import Chair8 from '../../../../public/assets/images/28.png'
import ProductCard from "../../elements/ProductCard";


export default function Section2() {
    return (
        <section className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h1 className="text-4xl font-semibold">Popular Products</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatem <br /> nesciunt minima natus deserunt odit.</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-6 w-[1280px]">
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair1}
                    title={"Mad Queen Armchair"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair2}
                    title={"White Wood Table"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair3}
                    title={"ESSEBODA 2-Seat Sofa"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair4}
                    title={"Single Sofa"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair5}
                    title={"Single Table 18"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair6}
                    title={"Soft Gray Chair"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair7}
                    title={"Mad Queen Armchair"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
                <ProductCard
                    icon={<FaHeart size={24} className="text-primary-gray hover:text-white" />}
                    img={Chair8}
                    title={"Table Lamp"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores."}
                    iconsGroup={<>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                    </>}
                    rating={4.5}
                    reviews={"50 Reviews"}
                    price={39.99}
                    btnIcon={<FiShoppingCart />}
                />
            </div>
        </section>
    )
}
