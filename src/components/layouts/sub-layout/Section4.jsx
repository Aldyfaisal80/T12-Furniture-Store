import { RiStarSFill } from 'react-icons/ri'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import bgCustomer from '../../../../public/assets/images/bg3.png'
import bgInput from '../../../../public/assets/images/bg6.jpeg'
import modernChair from '../../../../public/assets/images/modern_chair.png'
import profile from '../../../../public/assets/images/pp github.jpg'


export default function Section4() {
    return (
        <section className="flex flex-col w-full justify-center items-center gap-[80px]">
            <div className="flex flex-col w-full gap-8 justify-center items-center text-center">
                <div className="flex flex-col gap-4 justify-center items-center text-center">
                    <h1 className="text-4xl font-semibold">Customer says about us</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae, nesciunt minima natus.</span>
                </div>
                <div className="w-full flex justify-between items-center px-[40px] rounded-3xl" style={{ backgroundImage: `url(${bgCustomer})` }}>
                    <img src={modernChair} alt="" className='w-[550px]' />
                    <div className='flex flex-col gap-4 w-[550px] bg-white p-8 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center gap-4'>
                                <img src={profile} alt="" className='w-[60px] h-[60px] rounded-xl' />
                                <div className='flex flex-col text-left'>
                                    <p className='font-bold'>EL KONGKANG</p>
                                    <p className='text-sm'>Wonorejo Landlord</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex text-yellow-500'>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                </div>
                                <p className=' font-bold'>4.5 <span className='text-sm font-normal'>/ 50 Reviews</span></p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quidem quia eveniet quod ullam, sunt facilis obcaecati earum odit, voluptatem laboriosam minus commodi a, vitae voluptatibus. Cupiditate?</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <button className='flex justify-center items-center w-[40px] h-[40px] bg-primary-blue text-white font-bold rounded-lg'><IoMdArrowForward /></button>
                        <button className='flex justify-center items-center w-[40px] h-[40px] border-primary-blue border-2 text-primary-blue font-bold rounded-lg'><IoMdArrowBack /></button>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-6 justify-center items-center'>
                    <div className='w-full flex flex-col gap-4 justify-center items-center text-center'>
                        <h1 className='text-4xl font-semibold '>Keep in touch</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae, nesciunt minima natus.</span>
                    </div>
                    <div className='w-full flex flex-col gap-10 justify-center items-center text-center text-white rounded-3xl p-[60px] bg-contain' style={{ backgroundImage: `url(${bgInput})` }}>
                        <h1 className='text-4xl font-bold'>Get Our Promo Code By Subscribing <br /> To Our Newsletter</h1>
                        <div className='w-[800px] flex justify-between items-center gap-4 py-2 px-6 rounded-2xl bg-white'>
                            <input type="text" placeholder='Enter Email Address' className='w-full outline-none text-black'/>
                            <button className='flex w-[200px] p-2 justify-center items-center bg-yellow-400 rounded-2xl font-bold text-black'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
