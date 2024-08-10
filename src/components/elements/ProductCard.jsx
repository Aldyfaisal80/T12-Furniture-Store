/* eslint-disable react/prop-types */
const ProductCard = ({ icon , img , title , description, iconsGroup , rating , reviews ,price, btnIcon  }) => {
    return (
        <div className="flex flex-col w-[300px] border-2 border-primary-gray justify-center items-center gap-2 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="relative w-full flex flex-col justify-center items-center">
                <span className="absolute flex justify-center items-center top-0 right-0 w-[40px] h-[40px] rounded-full border-2 border-primary-gray bg-white hover:text-white hover:bg-primary-blue text-primary-gray">{icon}</span>
                <img src={img} alt="" className="p-4 w-[220px] aspect-square" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-center">{title}</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400">{description}</p>
                    <span className="flex text-yellow-500">
                        {iconsGroup}
                    </span>
                    <span>
                        <p className="font-bold">{rating} <span className="font-normal">/ {reviews}</span></p>
                    </span>
                </div>
            </div>
            <div className="flex w-full justify-between items-center">
                <h1 className="text-[1.3rem] font-bold">${price}</h1>
                <button className="flex gap-2 justify-center items-center text-lg text-white bg-primary-blue px-3 py-2 rounded-lg hover:bg-transparent border-primary-blue border hover:text-black cursor-pointer hover:delay-75 duration-300 transition-all hover:ease-in-out">Add to cart {btnIcon}</button>
            </div>
        </div>
    )
}

export default ProductCard