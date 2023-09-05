import Image from 'next/image';
import MagentaToPurple from '../_assets/MagentaToPurple.svg'
import Ew from '../_assets/Ew.svg'
import Polygon1 from '../_assets/Polygon1.svg'
import Polygon2 from '../_assets/Polygon2.svg'
import Polygon3 from '../_assets/Polygon3.svg'
import Polygon4 from '../_assets/Polygon4.svg'
import Polygon5 from '../_assets/Polygon5.svg'
import Hope from '../_assets/Hope.svg'

export default function News () {
    return (
        <>
        <div className="bg-purple py-40 px-[10dvw]">
        <div className="flex md:flex-row flex-col justify-center ">
            <span className="text-4xl font-bold md:w-[50dvw] select-none">
                <Image src={Ew} alt='test'></Image>    
            </span>         
            <span className='md:w-[50dvw] md:ml-10 md:mx-[1dvw] md:my-auto'>
                <div className='flex'>
                    <span>
                        <div className='absolute'>
                            <span className='flex flex-col'>
                                <h1 className="mt-8 text-7xl font-bold text-silver">Newsletter</h1>
                                <h2 className="text-right text-4xl font-bold text-silver">Projects, Updates</h2>
                            </span>
                        </div>
                        <div className="parent">
                            
                            <div className='flex justify-end mt-auto m-1'>
                                {/*1 */}
                                <Image src={Polygon1} alt='test'></Image>    
                            </div>
                            <div className='w-48'>
                                {/*2 */}
                            </div>
                            <div className='flex mb-10'>
                                {/*3 */}
                                <Image src={Polygon5} alt='test'></Image>    
                            </div>
                            <div>
                                {/*4 */}
                            </div>
                            <div>
                                <div className="text-silver text-5xl px-10 md:p-4 p-1 m-1 bg-purple border-[10px] font-bold rounded-3xl transition text-center">Join</div>
                                {/*5 */}
                            </div>
                            <div>
                                {/*6 */}
                            </div>
                            <div className='flex justify-end mb-auto'>
                                {/*7 */}
                                <Image src={Polygon2} alt='test'></Image>    
                            </div>
                            <div className='flex justify-start ml-5 m-1'>
                                {/*8 */}
                                <Image src={Polygon4} alt='test'></Image>    
                            </div>
                            <div className='flex justify-start m-1'>
                                {/*9 */}
                                <Image src={Polygon3} alt='test'></Image>    
                            </div>
                        </div>
                    </span>
                </div>
            </span>      
        </div>
        <div className="flex items-center justify-center ml-[1dvw ]mt-[1dvh] sm:mt-[1dvh]">
            <div className='absolute mb-32'>
                <Image src={Hope} alt='test'/>    
            </div>
       </div>
        </div>
    </>
    )
}