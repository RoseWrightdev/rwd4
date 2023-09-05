import Image from 'next/image';
import MagentaToPurple from '../_assets/MagentaToPurple.svg'
import Ew from '../_assets/Ew.svg'
import Polygon1 from '../_assets/Polygon1.svg'
import Polygon2 from '../_assets/Polygon2.svg'
import Polygon3 from '../_assets/Polygon3.svg'
import Polygon4 from '../_assets/Polygon4.svg'
import Polygon5 from '../_assets/Polygon5.svg'


export default function News () {
    return (
        <>
        <div className="flex md:flex-row flex-col justify-center bg-purple py-40 px-[10dvw]">
            <span className="text-4xl font-bold md:w-[50dvw] select-none">
                <Image src={Ew} alt='test'></Image>    
            </span>         
            <span className='md:w-[50dvw] md:mr-[1dvw] md:my-auto mb-10'>
                <div className='flex'>
                    <span>
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
                                <div className="text-silver text-lg md:p-4 p-1 px-6 m-1 bg-purple border-2 font-semibold rounded-lg transition text-center">Join</div>
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
        <Image src={MagentaToPurple} alt='test'></Image>    
    </>
    )
}