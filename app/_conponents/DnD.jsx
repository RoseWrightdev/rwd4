import Image from 'next/image';
import Hole from '../_assets/Hole.svg';
import RedToPurple from '../_assets/RedToPurple.svg'

export default function DnD () {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-center bg-red text-purple py-40 px-[10dvw]">
                <span className='md:w-[49dvw] md:mr-[1dvw] md:my-auto mb-10'>
                    <h1 className=" text-4xl md:text-5xl lg:text-7xl text-silver font-bold ">Design and <br/>Developement</h1>
                    <h2 className="md:text-3xl text-silver font-bold ">Figma, Nextjs, and Tailwind <br/> spearhead my projects</h2>
                </span>
                <span className="text-4xl font-bold md:w-[50dvw]">
                    <Image src={Hole} alt='test'></Image>    
                </span>               
            </div>
            <Image src={RedToPurple} alt='test'></Image>    
        </>
    )
}
