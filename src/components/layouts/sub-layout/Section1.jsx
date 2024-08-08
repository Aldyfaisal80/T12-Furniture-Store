export default function Section1() {
  return (
    <section className="flex">
      <div className="mt-32 flex flex-col gap-10">
        <h1 className="text-5xl font-bold leading-snug">Discover <span className="text-primary-blue">Furniture</span> <br /> With Ease Of Comfort.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit, sed diam nonummy nibh euismod
          tincidunt ut
        </p>
        <div className="flex items-center gap-4">
          <div className="bg-primary-blue text-white p-2 rounded-lg w-[100px] flex items-center justify-center">Get Started</div>
          <div className="text-primary-blue border-2 border-primary-blue p-[6px] w-[100px] flex items-center justify-center rounded-lg">Login</div>
        </div>
      </div>
      <div className="right">
        <img src="" alt="IMG" />
      </div>
    </section>
  )
}
