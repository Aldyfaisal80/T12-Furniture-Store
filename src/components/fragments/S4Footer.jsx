export default function Footer() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-6 w-[50%]">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold italic">FURNITURE<span className="text-gray-500">.ME</span></h1>
          <p className="text-gray-500/90 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> At itaque sed aperiam dolorum soluta debitis mollitia <br /> eum perspiciatis fugit, suscipit cum <span className="underline"><a href="#">Learn More</a></span></p>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Morning Hours</h1>
          <span className="flex gap-[70px] mt-5 text-gray-500/90 font-semibold">Saturday - Thusday <span>Friday</span></span>
          <span className="flex gap-[57px] text-gray-500/90 font-semibold">08:00 AM - 10:00 PM <span>Closed</span></span>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">OUR LOCATION</h1>
          <span className="text-gray-500/90 font-semibold">Jordan- Amman - 7th circle - St.3 - 67</span>
        </div>
      </div>
      <div className="flex justify-between flex-col w-[50%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Navigation</h1>
            <span className="text-gray-500/90 font-semibold">Home</span>
            <span className="text-gray-500/90 font-semibold">Event</span>
            <span className="text-gray-500/90 font-semibold">Services</span>
            <span className="text-gray-500/90 font-semibold">Contact us</span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Navigation</h1>
            <span className="text-gray-500/90 font-semibold">Home</span>
            <span className="text-gray-500/90 font-semibold">Event</span>
            <span className="text-gray-500/90 font-semibold">Services</span>
            <span className="text-gray-500/90 font-semibold">Contact us</span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Navigation</h1>
            <span className="text-gray-500/90 font-semibold">Home</span>
            <span className="text-gray-500/90 font-semibold">Event</span>
            <span className="text-gray-500/90 font-semibold">Services</span>
            <span className="text-gray-500/90 font-semibold">Contact us</span>
          </div>
        </div>
        <div>
          <img src="" alt="IMG" />
        </div>
      </div>
    </div>
  )
}
