import PrimaryButton from "../../../components/elements/PrimaryButton";
import HeroImg from "../../../../public/assets/images/one.png"
export default function Section1() {
  return (
    <section className="flex w-full h-screen justify-center items-center bg-gradient-to-l from-cyan-100 via-white to-cyan-100">
      <div className="flex w-[50%] flex-col gap-10 px-[80px]">
        <h1 className="text-5xl font-bold leading-snug">Discover <span className="text-primary-blue">Furniture</span> <br /> With Ease Of Comfort.</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit, sed diam nonummy nibh euismod tincidunt ut</p>
        <div className="flex items-center gap-4 text-[1.2rem]">
          <PrimaryButton.BlueButton text={"Get Started"} />
          <PrimaryButton.WhiteButton text={"Login"} />
        </div>
      </div>
      <div className="w-[70%]">
        <img src={HeroImg} alt="IMG" className="" />
      </div>
    </section>

  )
}
