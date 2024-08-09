import ProductCard from "../../fragments/S2CardProduct";

export default function Section2() {
    return (
        <section className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h1 className="text-4xl font-semibold">Popular Products</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatem <br /> nesciunt minima natus deserunt odit.</span>
            </div>
            <ProductCard />
        </section>
    )
}
