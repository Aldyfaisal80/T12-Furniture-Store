/* eslint-disable react/prop-types */
const CategoriesBadge = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}
const CategoriesButton = ({ img, product, totalProduct }) => {
    return (
        <div className="border-primary-blue border-2 bg-white items-center justify-center gap-2 px-2 py-4 rounded-full flex w-[220px] hover:bg-primary-blue hover:text-white cursor-pointer hover:delay-75 duration-300 transition-all hover:ease-in-out">
            <div className="w-[80px] rounded-full bg-white">
                <img src={img} className="w-[80px]" alt="img" />
            </div>
            <div className="flex flex-col">
                <div className="text-[1.1rem] font-[600]">{product}</div>
                <div>{totalProduct} Product</div>
            </div>
        </div>
    )
}

const CategoriesAllProducts = ({ product , totalProduct }) => {
    return (
        <div className="border-primary-blue border-2 bg-white items-center justify-center gap-2 px-2 py-4 rounded-full flex w-[220px] hover:bg-primary-blue hover:text-white cursor-pointer hover:delay-75 duration-300 transition-all hover:ease-in-out">
            <div className="flex flex-col justify-center items-center">
                <div className="text-xl font-semibold">{product}</div>
                <div>{totalProduct} Products</div>
            </div>
        </div>
    )
}


CategoriesBadge.CategoriesButton = CategoriesButton
CategoriesBadge.CategoriesAllProducts = CategoriesAllProducts

export default CategoriesBadge