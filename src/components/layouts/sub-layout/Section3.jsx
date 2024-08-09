import BgImg from "../../../../public/assets/images/bg3.png"
import Chair3 from "../../../../public/assets/images/41.png"
import Dresser1 from "../../../../public/assets/images/42.png"
import Couch1 from "../../../../public/assets/images/43.png"
import Table2 from "../../../../public/assets/images/44.png"

import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDownDoubleLine } from "react-icons/ri";


import ProductCard from "../../elements/ProductCard"
import Categories from "../../fragments/S3Categories"
export default function Section3() {
  return (
    <section>
      <div>
        <div className="flex flex-col justify-center items-center gap-10 bg-center bg-no-repeat py-10 bg-cover" style={{ backgroundImage: `url(${BgImg})` }}>
          <span className="text-4xl font-semibold">Categories</span>
          <span className="text-gray-500 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non</span>
          <Categories />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center py-10 gap-10">
            <span className="text-4xl font-semibold">Best Selling Products</span>
            <span className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non</span>
            <div className="flex flex-wrap justify-between items-center gap-6 w-[1280px]">
              <ProductCard>
                <ProductCard.CardImg
                  icon={<FaHeart size={24} />}
                  img={Chair3}
                />
                <ProductCard.CardDesc
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
                />
                <ProductCard.CardPrice
                  price={39.99}
                  btnIcon={<FiShoppingCart />}
                />
              </ProductCard>
              <ProductCard>
                <ProductCard.CardImg
                  icon={<FaHeart size={24} />}
                  img={Dresser1}
                />
                <ProductCard.CardDesc
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
                />
                <ProductCard.CardPrice
                  price={39.99}
                  btnIcon={<FiShoppingCart />}
                />
              </ProductCard>
              <ProductCard>
                <ProductCard.CardImg
                  icon={<FaHeart size={24} />}
                  img={Couch1}
                />
                <ProductCard.CardDesc
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
                />
                <ProductCard.CardPrice
                  price={39.99}
                  btnIcon={<FiShoppingCart />}
                />
              </ProductCard>
              <ProductCard>
                <ProductCard.CardImg
                  icon={<FaHeart size={24} />}
                  img={Table2}
                />
                <ProductCard.CardDesc
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
                />
                <ProductCard.CardPrice
                  price={39.99}
                  btnIcon={<FiShoppingCart />}
                />
              </ProductCard>
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

