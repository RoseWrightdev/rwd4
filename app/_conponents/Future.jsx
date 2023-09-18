import WhiteToRed from "../_assets/WhiteToRed.svg"
import Image from 'next/image';
import Reveal from './Reveal.jsx';

export default function Future () {
    return (
        <>
            <div className="flex flex-col justify-center bg-silver text-purple py-40 px-[10dvw]">
                <Reveal>
                    <h1 className="text-4xl md:text-8xl font-bold FutureTexture">Building the future, one line of code at a time</h1>
                </Reveal>
                <Reveal>
                    <div className="text-2x1 md:text-4xl font-bold flex md:flex-row flex-col ">
                        <div className="px-10 py-1 m-3 rounded-lg bg-red text-silver border-8 border-red hover:bg-silver hover:text-red hover:border-red transition">Case Studies</div>
                        <div className="px-16 py-1 m-3 rounded-lg bg-silver text-magenta border-8 hover:bg-magenta hover:text-silver hover:border-magenta transition">Contact</div>
                    </div>
                </Reveal>
            </div>
            <div className="bg-red">
            <Image src={WhiteToRed} alt="test" />
            </div>
        </>
    )
}
