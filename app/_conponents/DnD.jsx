import Image from 'next/image';
import Reveal from './Reveal.jsx';
import Hole from '../_assets/Hole.svg';
import RedToPurple from '../_assets/RedToPurple.svg'

export default function DnD () {
    return (
        <>
            <div className="flex flex-row justify-center bg-red text-purple py-40 px-[10dvw]">
                <span className='w-[49dvw] mr-[1dvw] my-auto'>
                    <h1 className="md:text-5xl lg:text-7xl text-xl text-silver font-bold ">Deisng and <br/>Developement</h1>
                    <h2 className="md:text-3xl text-sm text-silver font-bold ">Figma, Nextjs, and Tailwind <br/> spearhead my projects</h2>
                </span>
                <span className="text-4xl font-bold w-[50dvw]">
                    <Image src={Hole} alt='test'></Image>    
                </span>               
            </div>
            <Image src={RedToPurple} alt='test'></Image>    

        </>
    )
}
