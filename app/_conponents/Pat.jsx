import Image from 'next/image';
import MagentaToPurple from '../_assets/MagentaToPurple.svg'
import PatImg from '../_assets/PatImg.svg'
import Quote from '../_assets/Quote.svg'


export default function Pat () {
    return (
        <>
        <div className="flex md:flex-row-reverse flex-col-reverse justify-center bg-magenta text-purple py-40 px-[10dvw]">
            <span className='md:w-[49dvw] md:mr-[1dvw] md:my-auto mb-10'>
                <div className='flex'>
                    <div className='w-40'>
                        <Image src={Quote} alt='w'></Image>
                    </div>
                    <span>
                        <h1 className="indent-8 text-2xl md:text-3xl lg:text-4xl text-silver font-medium first-letter:font-bold italic">Rose was a tremendous asset to build our Citizen Carp Control website. She is creative, a fast learner and worked hard to capture the vision for our project.</h1>
                        <br/>
                        <h2 className="ml-8 text-2xl md:text-3xl lg:text-4xl text-silver font-medium"> —CEO and President of Wildlife Forever, <span className='whitespace-nowrap'>Pat Conzemius</span></h2>
                    </span>
                </div>
            </span>
            <span className="text-4xl font-bold md:w-[50dvw] select-none">
                <Image src={PatImg} alt='test'></Image>    
            </span>               
        </div>
        <Image src={MagentaToPurple} alt='test'></Image>    
    </>
    )
}