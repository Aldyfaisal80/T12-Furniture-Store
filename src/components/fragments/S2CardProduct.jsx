import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Chair1 from '../../../public/assets/images/1.png'
import Chair2 from '../../../public/assets/images/2.png'
import Chair3 from '../../../public/assets/images/3.png'
import Chair4 from '../../../public/assets/images/24.png'
import Chair5 from '../../../public/assets/images/25.png'
import Chair6 from '../../../public/assets/images/26.png'
import Chair7 from '../../../public/assets/images/27.png'
import Chair8 from '../../../public/assets/images/28.png'
import ProductCard from "../elements/ProductCard";

export default function CardProduct() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-6 w-[1280px]">
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair1}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair2}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair3}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair4}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair5}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair6}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair7}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
      <ProductCard>
        <ProductCard.CardImg
          icon={<FaHeart size={24} />}
          img={Chair8}
        />
        <ProductCard.CardDesc
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
        />
        <ProductCard.CardPrice
          price={39.99}
          btnIcon={<FiShoppingCart />}
        />
      </ProductCard>
    </div>
  )
}
