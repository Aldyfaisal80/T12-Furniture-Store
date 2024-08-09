import BgImg from "../../../../public/assets/images/bg3.png"
import Chair1 from "../../../../public/assets/images/31.png"
import Table1 from "../../../../public/assets/images/32.png"
import Lamp1 from "../../../../public/assets/images/33.png"
import Sofa1 from "../../../../public/assets/images/34.png"
import Bed1 from "../../../../public/assets/images/35.png"
import Chair2 from "../../../../public/assets/images/27.png"
import Chair3 from "../../../../public/assets/images/41.png"
import Dresser1 from "../../../../public/assets/images/42.png"
import Couch1 from "../../../../public/assets/images/43.png"
import Table2 from "../../../../public/assets/images/44.png"

import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDownDoubleLine } from "react-icons/ri";


import ProductCard from "../../elements/ProductCard"
import CategoriesBadge from "../../elements/CategoriesButton"
export default function Section3() {
  return (
    <section>
      <div>
        <div className="flex flex-col justify-center items-center gap-10 bg-center bg-no-repeat py-10 bg-cover" style={{ backgroundImage: `url(${BgImg})` }}>
          <span className="text-4xl font-semibold">Categories</span>
          <span className="text-gray-500 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non</span>
          <div className="flex gap-4">
            <CategoriesBadge.CategoriesButton img={Chair1} product="Chairs" totalProduct="10" />
            <CategoriesBadge.CategoriesButton img={Table1} product="Tables" totalProduct="21" />
            <CategoriesBadge.CategoriesButton img={Lamp1} product="Table Lamps" totalProduct="15" />
            <CategoriesBadge.CategoriesButton img={Sofa1} product="Sofas" totalProduct="17" />
            <CategoriesBadge.CategoriesButton img={Bed1} product="Bed" totalProduct="22" />
            <CategoriesBadge.CategoriesButton img={Chair2} product="Arm Chair" totalProduct="5" />
            <CategoriesBadge.CategoriesAllProducts product="See All" totalProduct="64" />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center py-10 gap-10">
            <span className="text-4xl font-semibold">Best Selling Products</span>
            <span className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non</span>
            <div className="flex flex-wrap justify-between items-center gap-6 w-[1280px]">
              <ProductCard
                icon={<FaHeart size={24} />}
                img={Chair3}
                title={"High Back Desk Chair"}
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
                icon={<FaHeart size={24} />}
                img={Dresser1}
                title={"Tall Dresser with 8 Drawers"}
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
                icon={<FaHeart size={24} />}
                img={Couch1}
                title={"Couch Cover 3 Pieces"}
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
                icon={<FaHeart size={24} />}
                img={Table2}
                title={"Side Table & Drawer Storage"}
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
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <span className="flex items-center gap-4 justify-center font-semibold text-[1.3rem] px-4 py-2 rounded-lg border-2 text-primary-blue border-primary-gray hover:bg-primary-blue hover:text-white cursor-pointer hover:delay-75 duration-300 transition-all hover:ease-in-out animate-bounce">See More <RiArrowDownDoubleLine />
          </span>
        </div>
      </div>
    </section>
  )
}

