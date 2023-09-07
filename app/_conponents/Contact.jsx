import Image from 'next/image';
import Thank from '../_assets/Thank.svg';
import PurpleToWhite from '../_assets/PurpleToWhite.svg'

export default function Contact () {
    return (
        <>
            <Image src={PurpleToWhite} alt='test'></Image>   
            <div className="flex md:flex-row flex-col justify-center bg-silver text-purple py-40 px-[10dvw]">
                <span className='md:w-[49dvw] md:mr-[1dvw] md:my-auto mb-10'>
                    <h1 className=" text-4xl md:text-5xl lg:text-7xl text-purple font-bold ">Contact</h1>
                    <h2 className="md:text-3xl text-purple font-bold ">Just send me an email or direct message!</h2>
                    <br/>
                    <h2 className="md:text-3xl text-red font-bold italic underline ">rosesophiewright@gmail.com</h2>
                    <br/>
                    <h2 className="md:text-3xl text-red font-bold italic underline ">@RoseWrightdev on Github</h2>
                    <br/>
                    <h2 className="md:text-3xl text-red font-bold italic underline ">@RoseWright on SubStack</h2>
                </span> 
                <span className="text-4xl font-bold md:w-[50dvw]">
                    <Image src={Thank} alt='test'></Image>    
                </span>        
            </div>
        </>
    )
}
