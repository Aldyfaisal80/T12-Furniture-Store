import Chair1 from "../../../public/assets/images/26.png"
import Table1 from "../../../public/assets/images/32.png"
import Lamp1 from "../../../public/assets/images/33.png"
import Sofa1 from "../../../public/assets/images/34.png"
import Bed1 from "../../../public/assets/images/35.png"
import Chair2 from "../../../public/assets/images/27.png"
import CategoriesBadge from "../elements/CategoriesButton"

export default function Categories() {
    return (
        <div className="flex gap-4">
            <CategoriesBadge.CategoriesButton img={Chair1} product="Chairs" totalProduct="10" />
            <CategoriesBadge.CategoriesButton img={Table1} product="Tables" totalProduct="21" />
            <CategoriesBadge.CategoriesButton img={Lamp1} product="Table Lamps" totalProduct="15" />
            <CategoriesBadge.CategoriesButton img={Sofa1} product="Sofas" totalProduct="17" />
            <CategoriesBadge.CategoriesButton img={Bed1} product="Bed" totalProduct="22" />
            <CategoriesBadge.CategoriesButton img={Chair2} product="Arm Chair" totalProduct="5" />
            <CategoriesBadge.CategoriesAllProducts product="See All" totalProduct="64" />
        </div>
    )
}
